import { ArrowRight } from "iconsax-react"
import SittingMan from "../assets/SittingMan.png"
import Blob from "../assets/Blob.png"
import { Link } from "react-router-dom"


const LandingPage = () => {
    return (
        <section className="bg-primary w-full h-dvh flex justify-center items-center relative z-0">
            <div className="flex justify-center items-center gap-40">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-extrabold text-body ">Konsultasi & Cek <br/> Kondisi Pikologis kamu </h1>
                    <p className="text-xl text-body">Bersama BK Prakarya Internasional</p>
                    <Link to="/login" className="flex justify-center items-center group w-[250px] rounded-full font-bold p-2 bg-body hover:bg-container">Get Started<ArrowRight size={20} className="ml-2 group-hover:animate-bounce"/></Link>
                    <Link to="/" className="flex justify-center items-center group w-[250px] rounded-full font-bold p-2 bg-body hover:bg-container">Dashboard<ArrowRight size={20} className="ml-2 group-hover:animate-bounce"/></Link>
                </div>
                <div className="flex justify-center items-center">
                    <img src={Blob} className="absolute [z-index:-1]" />
                    <img src={SittingMan} alt="illustration landing page"/>
                </div>
            </div>
        </section>
    )
}

export default LandingPage