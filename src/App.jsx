import { useState } from 'react'
import Login from './Page/Login';
import Sign from './Page/Sign';
import Landing from './Page/Landing';
import Home from './Page/Home';
import Book from './Page/Book';
import Fav from './Page/Fav';
import Read from './Page/Read';
import Nav from './Page/Nav';
// import Detailes from './Page/Detailes';

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign",
    element: <Sign/>,
  },
  {
    path: "/home/:CharId",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/book",
    element: <Book  />,
  },
  {
    path: "/read",
    element: <Read/>,
  },
  {
    path: "/fav",
    element: <Fav/>,
  },
  // {
  //   path: "/det/:bookId",
  //   element: <Detailes/>,
  // },
  // {
  //   path: "/det/:bookId",
  //   element: <Detailes/>,
  // },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App
