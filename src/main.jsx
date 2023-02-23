import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CategoryList}  from './components/CategoryList'
//import {GifGrid} from './components/GifGrid'
//import { SecToHr } from './components/SecToHr'
import {Counter} from './components/Counter'
import {BreakingBad} from "./components/BrakingBad"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
    <CategoryList/>
    <App />
    <BreakingBad/>
  </React.StrictMode>,
)


//const date = new Date(null);
//date.setSeconds(SECONDS); // specify value for SECONDS here
//const result = date.toISOString().slice(11, 19);
