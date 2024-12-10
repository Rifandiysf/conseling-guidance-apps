import Layout from "../Components/Layout"
import banner1 from "/Banner.svg"


const Dashboard = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-[800px] ml-[300px] mr-[20px] my-6">
        <div className="grid w-full grid-cols-5 grid-rows-4 gap-3">
          <div className="col-span-3 row-span-1 flex justify-between items-center rounded-xl bg-primary">
            <h1 className="ml-8 text-xl font-extrabold text-body">Pahami psikologi untuk<br/>mengerti pikiran dan<br/> tumbuh bersama</h1>
            <img src={banner1} className="" />
          </div>
          <div className="col-span-2 row-span-2 rounded-xl bg-container"></div>
          <div className="col-span-3 row-span-2 rounded-xl bg-container"></div>
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-xl bg-secondry p-7">
            <h1 className="font-semibold text-2xl">Cari tahu kondisi atau<br/> kesehatan psikologis kamu<br/> dengan jawab soal-soal<br/> yang kami buat.</h1>
            <button className="w-full bg-body p-1 rounded-lg font-semibold">Test Personality</button>
          </div>
          <div className="col-span-3 row-span-1 rounded-xl bg-container"></div>
        </div>
      </section>
    </>
  )
}

export default Dashboard