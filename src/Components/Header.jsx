import { Notification } from "iconsax-react"
import { Link } from "react-router-dom"
import InputSearch from "./InputSearch"


const Header = () => {
  return (
    <section className="ml-[300px] mr-[20px] py-6 flex justify-between items-center max-sm:m-0 max-sm:px-6">
        <h1 className="text-xl font-bold max-sm:text-sm">Wellcome <span className="text-secondry mr-1 hover:underline"><br/><Link to={'/'}>Rifandi Yusuf</Link></span>👋</h1>
        <div className="flex justify-center items-center gap-8 max-sm:gap-2">
            <InputSearch NameSearch={'Search'}/>
            <button><Notification size={32}/></button>
            <Link to={"#"}><div className="w-[50px] h-[50px] bg-container rounded-full max-sm:w-[35px] max-sm:h-[35px]"></div></Link>
        </div>
    </section>
  )
}

export default Header