
import Dashboard from "./Pages/Dashboard"
import LandingPage from "./Pages/LandingPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./Pages/Register"
import TestPsikologi from "./Pages/TestPsikologi"
import Absensi from "./Pages/Absensi"
import Problem from "./Pages/Problem"
import Konsultasi from "./Pages/Konsultasi"
import Login from "./Pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/> 
  },
  {
    path: "/login",
    element: <Login/> 
  },
  {
    path: "/register",
    element: <Register/> 
  },
  {
    path: "/landing-page",
    element: <LandingPage/> 
  },
  {
    path: "/test-psikologi",
    element: <TestPsikologi/> 
  },  {
    path: "/absensi",
    element: <Absensi/> 
  },
  {
    path: "/problem",
    element: <Problem/> 
  },
  {
    path: "/konsultasi",
    element: <Konsultasi/> 
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
