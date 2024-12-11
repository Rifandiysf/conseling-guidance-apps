import { Link } from "react-router-dom"


const Register = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-primary h-dvh">
      <form action="" className="bg-body rounded-lg p-[25px] max-sm:w-[97%] max-sm:p-[15px]">
        <div className="w-[45rem] max-sm:w-full">
          <h1 className="flex justify-center items-center mb-[50px] text-2xl font-bold max-sm:mb-[15px]">Register</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-2 gap-5 max-sm:grid-cols-1">
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
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
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
      <Link to={"/login"} className="flex justify-center items-center mt-2.5 h-10 w-[33rem] rounded-lg text-primary text-xl font-semibold cursor-pointer bg-body transition hover:bg-container max-sm:w-[97%]">Login</Link>
    </section>
  )
}

export default Register