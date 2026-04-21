import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layout/mainLayout';
import Homepage from './pages/hompage/hompage';
import Books from './pages/books/books';
import Router from './Routers/Router';
import { RouterProvider } from "react-router-dom";
import { TimelineProvider } from './Timeline/timelineContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={Router} />
    </TimelineProvider>
  </StrictMode>,
)
