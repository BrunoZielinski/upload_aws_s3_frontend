import { useState, useEffect } from 'react'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

// IMPORT COMPONENTS
import FileLIst from './components/FileLIst'
import Upload from './components/Upload'

// IMPORT STYLES
import GlobalState from './styles/global'
import * as C from './styles'

// IMPORT API
import api from './services/api'

export default function App() {
  const [filesList, setFilesList] = useState([])

  useEffect(() => {
    async function loadFiles() {
      const res = await api.get('uploads')

      const data = res.data

      setFilesList(filesList =>
        res.data.map(file => ({
          id: file.id,
          name: file.name,
          readableSize: filesize(Number(file.size)),
          preview: file.url,
          upload: true,
          url: file.url
        }))
      )
    }

    loadFiles()
  }, [])

  useEffect(() => {
    return () => {
      filesList.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [])

  const handleFiles = files => {
    let uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      upload: false,
      error: false,
      url: null
    }))

    setFilesList(file => [...file, ...uploadedFiles])

    uploadedFiles.forEach(processUpload)
  }

  const deleteFile = async id => {
    await api
      .delete(`upload/remove`, {
        params: {
          uploadId: id
        }
      })
      .then(() => {
        setFilesList(filesList => filesList.filter(upload => upload.id !== id))
      })
      .catch(err => {
        console.error(err)
      })
  }

  const updateFiles = (id, data) => {
    // setFilesList(filesList =>
    //   filesList.map(upload => {
    //     if (upload.id === id) {
    //       return { ...upload, ...data }
    //     }

    //     return upload
    //   })
    // )

    setFilesList(filesList =>
      filesList.map(upload =>
        upload.id === id ? { ...upload, ...data } : upload
      )
    )
  }

  const processUpload = file => {
    const data = new FormData()
    data.append('file', file.file, file.name)

    api
      .post('uploads', data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total))
          updateFiles(file.id, { progress })
        }
      })
      .then(res => {
        updateFiles(file.id, {
          upload: true,
          id: res.data.id,
          url: res.data.url
        })
      })
      .catch(() => {
        updateFiles(file.id, {
          upload: false,
          error: true
        })
      })
  }

  return (
    <C.Container>
      <C.Content>
        <Upload onUpload={handleFiles} />

        {!!filesList.length && (
          <FileLIst files={filesList} deleteFile={deleteFile} />
        )}
      </C.Content>

      <GlobalState />
    </C.Container>
  )
}
