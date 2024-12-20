
import Layout from "../Components/Layout"
import { ArrowLeft2, ArrowRight2, TickCircle } from "iconsax-react";
import { useState } from "react";


const TestPsikologi = () => {
  const [checkedRadio, setCheckRadio] = useState(false);
  const handleRadio = () => {
    setCheckRadio(!checkedRadio);
  }

  return (
    <>
      <Layout/>
      <section className=" ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">

        <div className="flex justify-center items-center w-full bg-secondry h-28 rounded-xl">
          <h1 className="text-lg font-bold text-body text-center max-sm:text-base">Cek kesehatan mentalmu dengan test psikologi sekarang</h1>
        </div>

        <div className="flex flex-col bg-container  rounded-xl my-6 p-6">
          <div className="flex flex-col justify-center items-center w-full h-48 border-b-2">
            <h1 className="text-3xl font-bold mb-5 max-sm:text-xl">Anda rutin mendapat teman baru?</h1>

            <div className="flex justify-center items-center gap-5">
              <h4 className="text-2xl font-semibold text-primary max-sm:text-base">Agree</h4>

              <form className="flex gap-2">
                <label htmlFor="radio" onClick={handleRadio} className="flex justify-center items-center border-[3px] border-primary cursor-pointer h-10 w-10 rounded-full max-sm:w-8 max-sm:h-8">{checkedRadio && (<TickCircle size={40} variant="Bold" color="#3195F7"/>)}</label>
                <input type="radio" id="radio" name="radio" className="hidden"/>
                <label htmlFor="radio" onClick={handleRadio} className="flex justify-center items-center border-[3px] border-secondry cursor-pointer h-10 w-10 rounded-full max-sm:w-8 max-sm:h-8">{checkedRadio && (<TickCircle size={40} variant="Bold" color="#9FFF24"/>)}</label>
                <input type="radio" id="radio" name="radio" className="hidden"/>
              </form>

              <h4 className="text-2xl font-semibold text-secondry max-sm:text-base">Disagree</h4>
            </div>
          </div>

          <div className="flex justify-between gap-2 mt-5">
            <button className="flex justify-center items-center bg-primary p-2 rounded-lg text-body font-semibold "><ArrowLeft2 size={18}/>Prev</button>
            <button className="flex justify-center items-center bg-primary p-2 rounded-lg text-body font-semibold ">Next<ArrowRight2 size={18}/></button>
          </div>
        </div>

      </section>
    </>
  )
}

export default TestPsikologi