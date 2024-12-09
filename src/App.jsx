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
import NotFound from "./Components/NotFound"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} loader={() => {document.title = "Dashboard | PISchool Counseling Guidance"}}/>
          <Route path="*" element={<NotFound/>} loader={() => {document.title = "Not Found | PISchool Counseling Guidance"}}/>

          <Route path="/setting" element={<Setting/>} loader={() => {document.title = "Setting | PISchool Counseling Guidance"}}/>
          <Route path="/login" element={<Login/>} loader={() => {document.title = "Login | PISchool Counseling Guidance"}}/>
          <Route path="/register" element={<Register/>} loader={() => {document.title = "Register | PISchool Counseling Guidance"}}/>
          <Route path="/landing-page" element={<LandingPage/>} loader={() => {document.title = "Landing Page | PISchool Counseling Guidance"}}/>
          <Route path="/test-psikologi" element={<TestPsikologi/>} loader={() => {document.title = "Test Psikologi | PISchool Counseling Guidance"}}/>
          <Route path="/absensi" element={<Absensi/>} loader={() => {document.title = "Absensi Page | PISchool Counseling Guidance"}}/>
          <Route path="/problem" element={<Problem/>} loader={() => {document.title = "Problem Page | PISchool Counseling Guidance"}}/>
          <Route path="/konsultasi" element={<Konsultasi/>} loader={() => {document.title = "Konsultasi Page | PISchool Counseling Guidance"}}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
