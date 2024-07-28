import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Users from './Users.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/api",
    element: <App />,
  },
  {
    path: "/customers",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
