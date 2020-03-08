import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { PicsProvider } from './context/picsContext'

ReactDOM.render(
    <PicsProvider>
        <App />
    </PicsProvider>, 
    document.getElementById('root')
)
