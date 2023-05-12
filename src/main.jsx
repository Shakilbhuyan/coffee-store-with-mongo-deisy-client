import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/addcoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updatecoffee',
    element:<UpdateCoffee></UpdateCoffee>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
