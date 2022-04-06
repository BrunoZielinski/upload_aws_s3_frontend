import styled from 'styled-components'

export const Container = styled.ul`
  margin-top: 20px;

  li {
    color: #444;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      margin-top: 0.9375rem;
    }
  }
`

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #999;
      font-size: 0.75rem;
      margin-top: 0.3125rem;

      button {
        color: #e57878;
        margin-left: 0.3125rem;
      }
    }
  }
`

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 0.6rem;
  background-size: cover;
  border-radius: 0.3125rem;
  border: 1px solid #7159c1;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
`
