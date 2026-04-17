import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layout/mainLayout';
import Homepage from './pages/hompage/hompage';
import Books from './pages/books/books';
import Router from './Routers/Router';
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
