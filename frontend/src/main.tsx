import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import './index.css'
import Footer from './Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
)
