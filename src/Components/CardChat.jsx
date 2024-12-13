

const CardChat = ({nameUser, lastChat}) => {
  return (
    <div className="flex items-center gap-2 w-full h-16 mx-2">
        <div className="bg-[#3194f736] w-[40px] h-[40px] rounded-full"></div>
        <div>
            <h1 className="font-semibold text-text">{nameUser}</h1>
            <p className="text-sm text-text ">{lastChat}</p>
        </div>
  </div>
  )
}

export default CardChat