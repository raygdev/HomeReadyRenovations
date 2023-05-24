import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout, loader as layoutLoader} from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} loader={layoutLoader}>
    <Route path='portfolio' element={<Portfolio/>} />
    <Route index element={<Home />}/>
  </Route>
  
  
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
