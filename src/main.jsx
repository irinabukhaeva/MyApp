import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { MyProvider } from './Context/MyContext'
import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
        <MyProvider>
            <App />
        </MyProvider>
    </BrowserRouter>
</React.StrictMode>
)
