

const InputSearch = ({NameSearch}) => {
  return (
    <input className="p-2.5 px-4 bg-container w-72 rounded-full focus:outline-none focus:ring-primary focus:ring-2 max-sm:w-32 max-sm:p-1.5 max-sm:px-2" type="search" placeholder={NameSearch}/>
  )
}

export default InputSearch