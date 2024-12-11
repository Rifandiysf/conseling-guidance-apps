import Layout from "../Components/Layout"


const Konsultasi = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-screen  ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="grid w-full grid-cols-1 grid-rows-5 gap-5">
          <div className="col-span-1 row-span-1 flex justify-center items-center bg-text rounded-xl">
            <h1 className="text-lg font-bold text-body">Konsultasi Page</h1>
          </div>
          <div className="col-span-1 row-span-4 bg-container rounded-xl">
          </div>
        </div>
      </section>
    </>
  )
}

export default Konsultasi