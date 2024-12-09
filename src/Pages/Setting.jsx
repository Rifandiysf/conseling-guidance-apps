import { Moon } from "iconsax-react"
import SideBar from "../Components/SideBar"
import ToggleButton from "../Components/ToggleButton"
import HeaderSetting from "../Components/HeaderSetting"



const Setting = () => {
  return (
    <>
      <SideBar/>
      <HeaderSetting title={'Setting'}/>
      <section className="ml-[300px] mr-[20px] my-6 h-screen bg-container rounded-xl">
        <div className="p-5">
          <h1 className="font-semibold border-b-2 pb-1">Theme</h1>
          <div className="flex justify-between items-center px-2 my-1 rounded-md transition-all  hover:bg-slate-200 hover:bg-opacity-40">  
            <h2 className="flex justify-center items-center gap-2 font-semibold"><Moon size={20} color="#3195F7"/>Dark Mode</h2>
            <ToggleButton/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Setting