import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CategoryList}  from './components/CategoryList'
import {GifGrid} from './components/GifGrid'
import { SecToHr } from './components/SecToHr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecToHr/>
    <GifGrid/>
    <CategoryList/>
    <App />
  </React.StrictMode>,
)


//const date = new Date(null);
//date.setSeconds(SECONDS); // specify value for SECONDS here
//const result = date.toISOString().slice(11, 19);
