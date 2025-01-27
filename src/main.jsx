import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AllData from '../public/AllData.json'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  
}from "react-router-dom"


import Home from './Components/Home/Home.jsx'
// import Body from './Components/Body/Body.jsx'
import MovieView from './Components/Body/MovieView.jsx'
import Body from "./Components/Body/Body.jsx";


const letter = ['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      
      {
        path:"/main",
        
        // element:<Body></Body>
        element:<Body letter={letter}></Body>
      },
      {
        path:"/movie-view/:id",
        loader:()=> fetch('../public/AllData.json'),
        // element:<Body></Body>
        element:<MovieView ></MovieView>
      }
      

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
