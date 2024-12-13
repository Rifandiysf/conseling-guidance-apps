import Layout from "../Components/Layout"
import StudentAreLate from "../assets/studentAreLate.svg"
import StudentProblem from "../assets/studentProblem.svg"
import StudentHaveMail from "../assets/studentHaveMail.svg"
import MenuProblem from "../Components/MenuProblem"


const Problem = () => {
  return (
    <>
      <Layout/>
      <section className="flex min-h-screen  ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="grid w-full grid-cols-1 grid-rows-4 gap-5">
          <div className="col-span-1 row-span-1 flex justify-center items-center bg-tertiary rounded-xl">
            <h1 className="text-lg font-bold text-body">Problem Page</h1>
          </div>

          <div className="col-span-1 row-span-3 grid grid-cols-2 grid-rows-2 gap-5 rounded-xl max-sm:grid-rows-3 max-sm:p-2.5">
            <div className="col-span-1 row-span-1 flex justify-center items-center gap-5 p-3 bg-primary h-full rounded-lg max-sm:col-span-2">
              <MenuProblem title={'Siswa Terlambat'} desc={'Cek siswa yang terlambat'} srcImg={StudentAreLate}/>
            </div>

            <div className="col-span-1 row-span-1 flex justify-center items-center gap-5 p-3 bg-primary h-full rounded-lg max-sm:col-span-2">
              <MenuProblem title={'Siswa Bermasalah'} desc={'Cek siswa yang Bermasalah Hari Ini'} srcImg={StudentProblem}/>
            </div>

            <div className="col-span-2 row-span-1 flex justify-center items-center gap-5 p-3 bg-primary h-full rounded-lg max-sm:col-span-2">
              <MenuProblem title={'Daftar Siswa Yang Meiliki Surat Peringatan'} desc={'Cek siswa yang memiliki surat peringatan'} srcImg={StudentHaveMail}/>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Problem