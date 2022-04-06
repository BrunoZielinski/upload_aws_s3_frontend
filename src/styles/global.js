import { createGlobalStyle } from 'styled-components'
import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
*{
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  color: inherit;
  box-sizing: border-box;
  vertical-align: baseline;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

img {
  height: auto;
  display: block;
  max-width: 100%;
}

body {
  font-size: 0.875rem;
  background-color: #7159c1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Arial, Helvetica, sans-serif;
}

html, body, #root{
  height: 100vh;
}

button{
  cursor: pointer;
  background-color:transparent;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }

  @media (max-width: 360px) {
    font-size: 81.25%;
  }
}
`
