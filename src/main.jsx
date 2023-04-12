import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';
import Details from './components/Details/Details';


 const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: ()=>fetch('Jobs.json')
      },
      {
        path: "statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "applied",
        element:<Applied></Applied>,
      },
      {
        path: "blogs",
        element:<Blogs></Blogs>,
      },
      {
        path: "details/:detailsId",
        element:<Details></Details>,
        loader: ({params})=>fetch(`/Jobs.json/${params.id}`)
      },
    ],
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
