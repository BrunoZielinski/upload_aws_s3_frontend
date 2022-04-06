import Dropzone from 'react-dropzone'

// IMPORT STYLES
import * as C from './styles'

const Upload = ({ onUpload }) => {
  const allowedMimes = 'image/*,application/pdf'

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <C.UploadMessage>
          Arraste e solte alguns arquivos aqui ou clique para selecionar os
          arquivos
        </C.UploadMessage>
      )
    }

    if (isDragReject) {
      return (
        <C.UploadMessage type="error">Arquivo não suportado</C.UploadMessage>
      )
    }

    return (
      <C.UploadMessage type="success">Solte os arquivos aqui</C.UploadMessage>
    )
  }

  return (
    <Dropzone accept={allowedMimes} onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <C.DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />

          {renderDragMessage(isDragActive, isDragReject)}
        </C.DropContainer>
      )}
    </Dropzone>
  )
}

export default Upload
