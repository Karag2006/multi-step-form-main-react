import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Step1 } from "./Pages"
import {Footer} from "./Components"

import "./scss/style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
