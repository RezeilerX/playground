import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// window['React'] = React
window.wp = {}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
