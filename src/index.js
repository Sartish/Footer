import React from 'react'
//We are using package, USED only to connect the html file 
import ReactDOM from 'react-dom'
import './index.css'


import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
//We write <App />, this is how we add it in React
//connect what ever is in the first string into the second argument ('root')
