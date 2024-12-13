import { Message } from "iconsax-react"
import Layout from "../Components/Layout"
import CardChat from "../Components/CardChat"


const Konsultasi = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-screen  ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="grid w-full grid-cols-1 grid-rows-5 gap-5">
          <div className="col-span-1 row-span-1 flex justify-center items-center bg-text rounded-xl">
            <h1 className="text-lg font-bold text-body">Konsultasi Page</h1>
          </div>

          <div className="col-span-1 row-span-4 flex  rounded-xl h-screen">

            <div className="w-2/5 h-full rounded-l-xl border-slate-500 bg-container overflow-y-scroll overflow-x-hidden max-sm:w-full max-sm:rounded-xl">
              <div className="w-full h-12 p-2.5 border-b border-[#f0f4f954]">
                <h1 className="text-xl font-bold text-primary">Chat</h1>
              </div>

              <CardChat nameUser={'Guru BK'} lastChat={'Ada yg mau di bantu?'}/>
              <CardChat nameUser={'Raihan'} lastChat={'han valo'}/>
              <CardChat nameUser={'Satria'} lastChat={'din'}/>
              <CardChat nameUser={'Nabil'} lastChat={'aya weh'}/>
              <CardChat nameUser={'Ghatan'} lastChat={'cup ie kumaha'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>
              <CardChat nameUser={'Test'} lastChat={'testing'}/>

            </div>

            <div className="flex justify-center items-center bg-[#3194f727] w-full h-full rounded-r-xl p-2.5 max-sm:hidden ">
              <div className="flex flex-col justify-center items-center">
                <Message color="#3195F7" variant="Bulk" size={72}/>
                <h1 className="text-xl font-bold text-primary">Ayo Mulai Pesan Anda</h1>
                <p className="w-3/5 text-center text-text">Konsultasi kepada guru atau teman dekatmu untuk berdiskusi tentang masalah psikologi kamu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Konsultasi