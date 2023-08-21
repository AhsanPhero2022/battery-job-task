import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Details from './Details.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './Footer/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/details',
    element: <Details></Details>
  },
  {
    path: '/footer',
    element: <Footer></Footer>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
