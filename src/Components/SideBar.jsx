import { ClipboardText, Home, InfoCircle, Logout, Messages3, Setting, TaskSquare } from "iconsax-react"
import ButtonNav from "./ButtonNav"


const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-[280px] h-dvh fixed left-0 top-0 z-50 bg-container">
        <div className="flex flex-col gap-12">
            <h1 className="flex justify-center items-center text-2xl font-bold mt-[33px]">LOGO</h1>
            <nav className="flex flex-col">
              <ButtonNav path="/"><Home size={26}/>Dashboard</ButtonNav>
              <ButtonNav path="/test-psikologi"><TaskSquare size={26}/>Test Psikologi</ButtonNav>
              <ButtonNav path="/absensi"><ClipboardText size={26}/>Absensi</ButtonNav>
              <ButtonNav path="/problem"><InfoCircle size={26}/>Problem</ButtonNav>
              <ButtonNav path="/konsultasi"><Messages3 size={26}/>Konsultasi</ButtonNav>                
            </nav>
        </div>
        <div className="flex flex-col">
            <ButtonNav path="/setting"><Setting/>Setting</ButtonNav>
            <button className="flex justify-center items-center gap-2 mx-8 my-5 py-1.5 rounded-lg text-primary font-bold bg-[#0073ff27] transition hover:bg-[#0073ff4b]">Logout Account<Logout/></button>
        </div>
    </aside>
  )
}

export default SideBar