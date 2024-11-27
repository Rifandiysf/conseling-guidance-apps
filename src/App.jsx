import Dashboard from "./Pages/Dashboard"
import LandingPage from "./Pages/LandingPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import TestPsikologi from "./Pages/TestPsikologi"
import Absensi from "./Pages/Absensi"
import Problem from "./Pages/Problem"
import Konsultasi from "./Pages/Konsultasi"
import Login from "./Pages/Login"
import Setting from "./Pages/Setting"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} loader={() => {document.title = "Dashboard | Counseling Guidance PI"}}/>
          <Route path="/setting" element={<Setting/>} loader={() => {document.title = "Setting | Counseling Guidance PI"}}/>
          <Route path="/login" element={<Login/>} loader={() => {document.title = "Login | Counseling Guidance PI"}}/>
          <Route path="/register" element={<Register/>} loader={() => {document.title = "Register | Counseling Guidance PI"}}/>
          <Route path="/landing-page" element={<LandingPage/>} loader={() => {document.title = "Landing Page | Counseling Guidance PI"}}/>
          <Route path="/test-psikologi" element={<TestPsikologi/>} loader={() => {document.title = "Test Psikologi | Counseling Guidance PI"}}/>
          <Route path="/absensi" element={<Absensi/>} loader={() => {document.title = "Absensi Page | Counseling Guidance PI"}}/>
          <Route path="/problem" element={<Problem/>} loader={() => {document.title = "Problem Page | Counseling Guidance PI"}}/>
          <Route path="/konsultasi" element={<Konsultasi/>} loader={() => {document.title = "Konsultasi Page | Counseling Guidance PI"}}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
