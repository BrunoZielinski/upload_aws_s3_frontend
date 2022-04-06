import styled, { css } from 'styled-components'

const dragActive = css`
  border-color: #78e5d5;
`

const dragReject = css`
  border-color: #e57878;
`

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px dashed #ddd;
  transition: height 0.3s ease, border 0.3s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5'
}

export const UploadMessage = styled.p`
  font-weight: bold;
  text-align: center;
  color: ${props => messageColors[props.type || 'default']};
`
