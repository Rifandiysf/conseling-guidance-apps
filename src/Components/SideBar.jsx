import { ClipboardText, Home, InfoCircle, Logout, Messages3, Setting, TaskSquare } from "iconsax-react"
import ButtonNav from "./ButtonNav"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-[280px] h-dvh fixed left-0 top-0 z-50 bg-container shadow-lg max-sm:w-screen max-sm:h-[70px] max-sm:top-[91%]">
        <div className="flex flex-col gap-12 max-sm:flex-row max-sm:justify-center max-sm:items-center">
            <h1 className="flex justify-center items-center text-2xl font-bold mt-[33px] max-sm:hidden"><span>LOGO</span></h1>
            <nav className="flex flex-col max-sm:flex-row">
              <ButtonNav path="/"><Home size={26}/><span className="max-sm:hidden">Dashboard</span></ButtonNav>
              <ButtonNav path="/test-psikologi"><TaskSquare size={26}/><span className="max-sm:hidden">Test Psikologi</span></ButtonNav>
              <ButtonNav path="/absensi"><ClipboardText size={26}/><span className="max-sm:hidden">Absensi</span></ButtonNav>
              <ButtonNav path="/problem"><InfoCircle size={26}/><span className="max-sm:hidden">Problem</span></ButtonNav>
              <ButtonNav path="/konsultasi"><Messages3 size={26}/><span className="max-sm:hidden">Konsultasi</span></ButtonNav>                
            </nav>
        </div>
        <div className="flex flex-col max-sm:hidden">
            <ButtonNav path="/setting"><Setting/><span>Setting</span></ButtonNav>
            <Link to={'/landing-page'} className="flex justify-center items-center gap-2 mx-8 my-5 py-1.5 rounded-lg text-primary font-bold bg-[#0073ff27] transition hover:bg-[#0073ff4b] max-sm:hidden"><span>Logout Account</span><Logout/></Link>
        </div>
    </aside>
  )
}

export default SideBar