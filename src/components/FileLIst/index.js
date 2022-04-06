import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

// IMPORT STYLES
import * as C from './styles'

const FileLIst = ({ files, deleteFile }) => {
  return (
    <C.Container>
      {files.map(file => (
        <li key={file.id}>
          <C.FileInfo>
            <C.Preview src={file.preview || file.url} />

            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readableSize}{' '}
                {file.url && (
                  <button onClick={() => deleteFile(file.id)}>Excluir</button>
                )}
              </span>
            </div>
          </C.FileInfo>

          <div>
            {!file.upload && !file.error && !file.url && (
              <div
                style={{
                  width: 40,
                  align: 'center',
                  display: 'inline-flex'
                }}
              >
                <CircularProgressbar
                  styles={buildStyles({
                    textColor: '#7159c1',
                    trailColor: '#d6d6d6',
                    pathColor: `rgba(113, 89, 193, ${file.progress / 100})`
                  })}
                  value={file.progress}
                  text={`${file.progress}%`}
                  strokeWidth={10}
                />
              </div>
            )}

            {file.url && (
              <a
                href={file.url}
                target="blank"
                rel="noopener noreferrer external nofollow"
              >
                <MdLink
                  style={{
                    marginRight: 8
                  }}
                  size={24}
                  color="#222"
                />
              </a>
            )}

            {file.upload && <MdCheckCircle color="#78e5d5" size={24} />}
            {file.error && <MdError color="#e57878" size={24} />}
          </div>
        </li>
      ))}
    </C.Container>
  )
}

export default FileLIst
