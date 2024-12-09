import Layout from "../Components/Layout"


const TestPsikologi = () => {
  return (
    <>
      <Layout/>
      <section className="ml-[300px] mr-[20px] my-6 ">
        <div className="flex justify-center items-center bg-secondry h-28 rounded-xl">
          <h1 className="text-lg font-bold text-body">Cek kesehatan mentalmu dengan test psikologi sekarang</h1>
        </div>
        <div className="flex bg-container h-screen rounded-xl my-6 p-6">
          <div className="flex flex-col justify-center items-center w-full h-48">
            <h1 className="text-3xl font-bold">hallo</h1>
            <div className="flex justify-center items-center gap-5">
              <h4>Agree</h4>
              <div className="flex gap-10">
                <label htmlFor="#veryagree">
                  <input type="radio" id="veryagree" className=""/>
                </label>
              </div>
              <h4>Disgree</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestPsikologi