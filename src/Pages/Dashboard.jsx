import { Link } from "react-router-dom"
import Layout from "../Components/Layout"
import Blob from "/Blob.svg"
import Banner from "../Components/Banner"
import messageIllus from "../assets/message.svg"

const Dashboard = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="grid w-full grid-cols-5 grid-rows-4 gap-3 max-sm:grid-cols-3 max-sm:grid-rows-7"> 
          <Banner/>

          <div className="col-span-2 row-span-2 rounded-xl bg-container max-sm:col-span-3 max-sm:row-span-2"></div>
          
          <div className="col-span-3 row-span-2 rounded-xl bg-container max-sm:col-span-3"></div>
          
          <div className="col-span-2 row-span-1 flex flex-col justify-between overflow-hidden relative rounded-xl bg-secondry p-7 max-sm:col-span-3 max-sm:row-span-1">
            <img src={Blob} className="absolute right-0 bottom-0 rounded-xl w-[12rem]"/>
            <h1 className="font-semibold text-xl w-full relative z-1 max-sm:text-base">Cari tahu jenis personality kamu seperti apa dengan jawab soal-soal yang kami buat.</h1>
            <Link to={'/test-psikologi'} className="text-center w-full bg-body p-1 rounded-lg font-semibold relative z-1">Test Personality</Link>
          </div>
          
          <div className="col-span-3 row-span-1 flex justify-between items-center relative px-7 overflow-hidden rounded-xl bg-container ">
            <img src={messageIllus} className="absolute right-0 bottom-0" />
            <h1 className="relative z-[1] font-semibold text-xl w-3/5 max-sm:text-base">Mari mulai ceritakan masalah psikologis anda ke guru counseling PI School</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard