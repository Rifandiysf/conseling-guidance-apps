import { Link } from "react-router-dom"


const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-primary h-dvh w-full">
      <form action="" className="bg-body rounded-lg p-[25px] max-sm:w-[97%]">
        <div className="w-[30rem] max-sm:w-full">
            <h1 className="flex justify-center items-center mb-[50px] text-2xl font-bold">Login Page</h1>
            <div className="flex flex-col justify-start gap-1">
                <label htmlFor="username" className="font-semibold">Username or Email</label>
                <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="text" name="username" placeholder="Type Your Username" />
                <label htmlFor="password" className="font-semibold">Password</label>
                <input className="bg-container p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-2" type="password" name="pasword" placeholder="Type Your Password" />
            </div>
            <div className="flex flex-col justify-center items-center mt-[30px] gap-2.5">
                <button type="submit" className="w-full h-10 bg-secondry rounded-md text-xl font-bold cursor-pointer transition hover:bg-[#94eb23]">Login</button>
                <Link href="#" className="hover:underline">Forgot Password?</Link>
            </div>
        </div>
      </form>
      <Link to={"/register"} className="flex justify-center items-center mt-2.5 h-10 w-[33rem] rounded-lg text-primary text-xl font-semibold cursor-pointer bg-body transition hover:bg-container max-sm:w-[97%]">Create Account</Link>
    </section>
  )
}

export default Login