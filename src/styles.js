import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  margin: 1rem;
  max-height: 90vh;
  max-width: 30rem;
  overflow-y: auto;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`
