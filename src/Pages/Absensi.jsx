import { AddSquare, Danger, Edit, InfoCircle, TickCircle, Trash } from "iconsax-react"
import Layout from "../Components/Layout"


const Absensi = () => {
  return (
    <>
      <Layout/>
      <section className="ml-[300px] mr-[20px] my-6">
        <div className="flex justify-center items-center bg-primary h-28 rounded-xl">
          <h1 className="text-lg font-bold text-body">Absenesi page</h1>
        </div>
        <div className="flex justify-between items-center bg-secondry h-12 my-4 px-3 rounded-xl">
          <div className="flex gap-2">
            <select name="class" id="class" className="h-7 border-none outline-none px-2 bg-container text-xl rounded-md cursor-pointer focus:ring-primary focus:ring-2 " required>
              <option value="">Kelas</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
            <select name="major" id="major" className="h-7 border-none outline-none px-2 bg-container text-xl rounded-md cursor-pointer focus:ring-primary focus:ring-2 " required>
              <option value="">Jurusan</option>
              <option value="PPLG">PPLG</option>
              <option value="TJKT">TJKT</option>
              <option value="DKV">DKV</option>
              <option value="HR">DKV</option>
              <option value="MPLB">MPLB</option>
              <option value="TKRO">TKRO</option>
              <option value="TBSM">TBSM</option>
              <option value="TM">TM</option>
            </select>
          </div>
          <div className="flex gap-1">
            <button className="bg-container p-[3px] rounded-md"><Trash/></button>
            <button className="bg-container p-[3px] rounded-md"><AddSquare/></button>
            <button className="bg-container p-[3px] rounded-md"><Edit/></button>
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-primary h-10 ">
              <tr className="text-body">
                <th className="p-3 text-base font-semibold tracking-wide text-left">No</th>
                <th className="p-3 text-base font-semibold tracking-wide text-left">Name</th>
                <th className="p-3 text-base font-semibold tracking-wide text-left">Kelas</th>
                <th className="p-3 text-base font-semibold tracking-wide text-left">Jurusan</th>
                <th className="p-3 text-base font-semibold tracking-wide text-left">Status</th>
                <th className="p-3 text-base font-semibold tracking-wide text-left">Note</th>
              </tr>
            </thead>
            <tbody className="bg-container">
              <tr>
                <td className="p-3.5 text-sm text-left">01.</td>
                <td className="p-3.5 text-sm text-left">Rifandi Yusuf</td>
                <td className="p-3.5 text-sm text-left">XI</td>
                <td className="p-3.5 text-sm text-left">PPLG</td>
                <td className="p-3.5 text-sm text-left"><span className="bg-[#05FF00] bg-opacity-15 p-1 px-2 rounded-md font-semibold text-green-500">Hadir</span></td>
                <td className="p-3.5 text-sm text-left"><TickCircle color="#05FF00"/></td>
              </tr>
              <tr>
                <td className="p-3.5 text-sm text-left">01.</td>
                <td className="p-3.5 text-sm text-left">Rifandi Yusuf</td>
                <td className="p-3.5 text-sm text-left">XI</td>
                <td className="p-3.5 text-sm text-left">PPLG</td>
                <td className="p-3.5 text-sm text-left"><span className="bg-yellow-400 bg-opacity-15 p-1 px-2 rounded-md font-semibold text-yellow-500">Izin</span></td>
                <td className="p-3.5 text-sm text-left"><InfoCircle color="#facc15"/></td>
              </tr>
              <tr>
                <td className="p-3.5 text-sm text-left">01.</td>
                <td className="p-3.5 text-sm text-left">Rifandi Yusuf</td>
                <td className="p-3.5 text-sm text-left">XI</td>
                <td className="p-3.5 text-sm text-left">PPLG</td>
                <td className="p-3.5 text-sm text-left"><span className="bg-red-400 bg-opacity-15 p-1 px-2 rounded-md font-semibold text-red-500">Alfa</span></td>
                <td className="p-3.5 text-sm text-left"><Danger color="#f87171"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Absensi