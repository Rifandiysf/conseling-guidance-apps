import { Notification } from "iconsax-react"
import { Link } from "react-router-dom"
import InputSearch from "./InputSearch"


const Header = () => {
  return (
    <section className="ml-[300px] mr-[20px] my-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Wellcome <span className="text-secondry mr-1">Rifandi Yusuf</span>👋</h1>
        <div className="flex justify-center items-center gap-8">
            <InputSearch NameSearch={'Search'}/>
            <button><Notification size={32}/></button>
            <Link to={"#"}><div className="w-[50px] h-[50px] bg-container rounded-full"></div></Link>
        </div>
    </section>
  )
}

export default Header