import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CategoryList}  from './components/CategoryList'
import {GifGrid} from './components/GifGrid'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifGrid/>
    <CategoryList/>
    <App />
  </React.StrictMode>,
)
