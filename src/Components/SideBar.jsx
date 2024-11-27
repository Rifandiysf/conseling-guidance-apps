import { ClipboardText, Home, InfoCircle, Logout, Messages3, Setting, TaskSquare } from "iconsax-react"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-[20%] h-dvh fixed z-50 bg-container">
        <div className="flex flex-col gap-12">
            <h1 className="flex justify-center items-center text-2xl font-bold mt-[33px]">LOGO</h1>
            <nav className="flex flex-col">
                <Link to="/dashboard" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><Home size={26}/>Dashboard</Link>
                <Link to="/test-psikologi" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><TaskSquare size={26}/>Test Psikologi</Link>
                <Link to="/absensi" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><ClipboardText size={26}/>Absensi</Link>
                <Link to="/problem" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><InfoCircle size={26}/>Problem</Link>
                <Link to="/konsultasi" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><Messages3 size={26}/>Konsultasi</Link>                
            </nav>
        </div>
        <div className="flex flex-col">
            <Link to="/setting" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 hover:bg-body hover:text-primary"><Setting/>Setting</Link>
            <button className="flex justify-center items-center gap-2 mx-8 my-5 py-1.5 rounded-lg text-primary font-bold bg-[#0073ff27] transition hover:bg-[#0073ff4b]">Logout Account<Logout/></button>
        </div>
    </aside>
  )
}

export default SideBar