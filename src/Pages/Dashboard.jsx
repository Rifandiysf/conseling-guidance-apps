import Layout from "../Components/Layout"


const Dashboard = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="grid w-full grid-cols-5 grid-rows-4 gap-3 max-sm:grid-cols-2 max-sm:grid-rows-6"> 
          <div className="col-span-5 row-span-1 flex justify-left items-center rounded-xl bg-primary max-sm:col-span-3 max-sm:row-span-1">
            <h1 className="ml-8 text-xl font-extrabold text-body max-sm:text-sm max-sm:ml-4">Pahami psikologi untuk<br/>mengerti pikiran dan<br/> tumbuh bersama</h1>
          </div>
          <div className="col-span-2 row-span-2 rounded-xl bg-container max-sm:col-span-3 max-sm:row-span-1"></div>
          <div className="col-span-3 row-span-2 rounded-xl bg-container max-sm:col-span-3"></div>
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-xl bg-secondry p-7 max-sm:col-span-3 max-sm:row-span-1">
            <h1 className="font-semibold text-2xl max-sm:text-base">Cari tahu kondisi atau<br/> kesehatan psikologis kamu<br/> dengan jawab soal-soal<br/> yang kami buat.</h1>
            <button className="w-full bg-body p-1 rounded-lg font-semibold">Test Personality</button>
          </div>
          <div className="col-span-3 row-span-1 rounded-xl bg-container"></div>
        </div>
      </section>
    </>
  )
}

export default Dashboard