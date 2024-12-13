

const CardChat = ({nameUser, lastChat}) => {
  return (
    <div className="flex items-center gap-2 w-full h-16 mx-2">
        <div className="bg-container w-[40px] h-[40px] rounded-full"></div>
        <div>
            <h1 className="font-semibold text-container">{nameUser}</h1>
            <p className="text-sm text-container ">{lastChat}</p>
        </div>
  </div>
  )
}

export default CardChat