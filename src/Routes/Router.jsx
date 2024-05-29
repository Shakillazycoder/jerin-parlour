import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Team from "../Pages/Team/Team";
import Contact from "../Pages/Contact Us/Contact";
import Dashboard from "../Layout/Dashboard";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>404 error page</h1>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/portfolio',
            element: <Portfolio></Portfolio>
        },
        {
            path: '/team',
            element: <Team></Team>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
    }
  ]);


  export default router;