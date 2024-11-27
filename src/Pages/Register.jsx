import { Link } from "react-router-dom"


const Register = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-primary h-dvh">
      <form action="" className="bg-body rounded-lg p-[25px]">
        <div className="w-[45rem]">
          <h1 className="flex justify-center items-center mb-[50px] text-2xl font-bold">Register</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-2 gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold">Username</label>
              <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="text" id="username" name="username" placeholder="Type Your Username" required/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="email" id="email" name="email" placeholder="Type Your Email" required/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="major" className="font-semibold">Jurusan</label>
              <select name="major" id="major" className="h-10 border-none outline-none px-1 bg-container text-xl rounded-md cursor-pointer focus:ring-primary focus:ring-2" required>
                <option value="">Pilih Jurusan Anda</option>
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

            <div className="flex flex-col gap-1">
              <label htmlFor="class" className="font-semibold">Kelas</label>
              <select name="class" id="class" className="h-10 border-none outline-none px-1 bg-container text-xl rounded-md cursor-pointer focus:ring-primary focus:ring-2" required>
                <option value="">Select your class</option>
                <optgroup label="Pengembangan Perangkat Lunak & Gim">
                  <option value="X-PPLG">X-PPLG</option>
                  <option value="XI-PPLG 1">XI-PPLG 1</option>
                  <option value="XI-PPLG 2">XI-PPLG 2</option>
                  <option value="XII-PPLG">XII-PPLG</option>
                </optgroup>
                <optgroup label="Teknik Jaringan Komputer & Telekomunikasi">
                  <option value="X-TJKT">X-TJKT</option>
                  <option value="XI-TJKT">XI-TJKT</option>
                  <option value="XII-TJKT">XII-TJKT</option>
                </optgroup>
                <optgroup label="Design Komunikasi Visual">
                  <option value="X-DKV 1">X-DKV 1</option>
                  <option value="X-DKV 2">X-DKV 2</option>
                  <option value="XI-DKV 1">XI-DKV 1</option>
                  <option value="XI-DKV 2">XI-DKV 2</option>
                  <option value="XII-DKV">XII-DKV</option>
                </optgroup>
                <optgroup label="Hotel & Restorant">
                  <option value="X-HR">X-HR</option>
                  <option value="XI-HR">XI-HR</option>
                  <option value="XII-HR">XII-HR</option>
                </optgroup>
                <optgroup label="Management Perkantoran Layanan Bisnis">
                  <option value="X-MPLB">X-MPLB</option>
                  <option value="XI-MPLB">XI-MPLB</option>
                  <option value="XII-MPLB">XII-MPLB</option>
                </optgroup>
                <optgroup label="Teknik Kendaraan Ringan Otomotif">
                  <option value="X-TKRO">X-TKRO</option>
                  <option value="XI-TKRO">XI-TKRO</option>
                  <option value="XII-TKRO">XII-TKRO</option>
                </optgroup>
                <optgroup label="Teknik Bisnis Sepeda Motor">
                  <option value="X-TBSM">X-TBSM</option>
                  <option value="XI-TBSM">XI-TBSM</option>
                  <option value="XII-TBSM">XII-TBSM</option>
                </optgroup>
                <optgroup label="Teknik Mesin">
                  <option value="X-TM">X-TM</option>
                  <option value="XI-TM">XI-TM</option>
                  <option value="XII-TM">XII-TM</option>
                </optgroup>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="font-semibold">Nomor HP</label>
              <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="number" name="phone" id="phone" placeholder="Type Your Phone Number" required/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold">Password</label>
              <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="password" name="password" id="password" placeholder="Type Your Password" required/>
            </div>
          </div>
          <button type="submit" className="w-full h-10 mt-5 rounded-md bg-secondry text-xl font-bold">Create</button>
        </div>
      </form>
      <Link to={"/login"} className="flex justify-center items-center mt-2.5 h-10 w-[33rem] rounded-lg text-primary text-xl font-semibold cursor-pointer bg-body transition hover:bg-container">Login</Link>
    </section>
  )
}

export default Register