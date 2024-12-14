import { AddSquare, Edit, Trash } from "iconsax-react"


const Filter = () => {
  return (
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
  )
}

export default Filter