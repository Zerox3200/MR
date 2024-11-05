import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Toaster } from 'react-hot-toast'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Toaster toastOptions={{
 style: {
 width: '100%',
 height: '60px',
 backgroundColor: '#E7603E',
 color: '#ffff',
 borderRadius: '8px'
 }
 }} position='botom-center' />
  </React.StrictMode>
)

reportWebVitals()
