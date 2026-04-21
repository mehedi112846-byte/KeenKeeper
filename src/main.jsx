import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './Routers/Router';
import { RouterProvider } from "react-router-dom";
import { TimelineProvider } from './Timeline/timelineContext';
import { FilterProvider } from './context/filterContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
      <TimelineProvider>
        <RouterProvider router={Router} />
      </TimelineProvider>
    </FilterProvider>
  </StrictMode>,
)