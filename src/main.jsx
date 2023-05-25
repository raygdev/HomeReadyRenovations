import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout, loader as layoutLoader} from './pages/Layout/Layout'
import Error from './components/Error/Error'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import SideBarContext from './context/SideBarContext'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} loader={layoutLoader} errorElement={<Error />}>
    <Route path='portfolio' element={<Portfolio/>} />
    <Route index element={<Home />}/>
  </Route>
  
  
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideBarContext>
      <RouterProvider router={router}/>
    </SideBarContext>
  </React.StrictMode>,
)
