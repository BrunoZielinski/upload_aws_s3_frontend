import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// IMPORT STYLES
// import './scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />

    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  </React.StrictMode>
)
