import { Link } from "react-router-dom"


const CountProblem = ({ Title, CountDisplay }) => {
  return (
        <Link to={'/problem'} className="flex justify-between items-center w-full h-24 gap-3 rounded-md bg-primary p-2.5 hover:bg-[#3194f7c4]">
            <h1 className="text-lg font-bold text-body">{Title}</h1>
            <div className="flex justify-center items-center w-[35px] h-[35px] bg-tertiary rounded-full font-bold text-body">{CountDisplay}</div>
        </Link>
  )
}

export default CountProblem