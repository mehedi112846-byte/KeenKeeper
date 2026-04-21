import React from 'react';
import MainLayout from '../layout/mainLayout';
import Hompage from '../pages/hompage/hompage';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer/Footer';
import Books from '../pages/books/books';
import { createBrowserRouter } from "react-router-dom";
import Error from '../pages/ErrorPage/Error';
import Details from '../pages/DetailsPage/Details';
import Timeline from '../TimelineData/timeline';

const Router = createBrowserRouter([
  {
  path:"/",
  element:<MainLayout/>,
  children:[
    { index: true, element: <Hompage /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/timeline", element: <Timeline /> },

    {
      index: true,
      element:<Hompage/>,
    },
    {
      path:"/books",
      element:<Books/>,
    },
    {
    path: "/details/:id",
    element: <Details />,
}
  ],
  errorElement: <Error/>
},
]);

export default Router;