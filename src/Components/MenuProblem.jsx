

const MenuProblem = ({ title, desc, srcImg }) => {
  return (
    <>
        <div>
            <h1 className="text-3xl text-body font-bold mb-5 max-sm:text-lg">{title}</h1>
            <p className="text-body max-sm:text-sm">{desc}</p>
        </div>
        <img src={srcImg} className="h-[9.5rem] max-sm:h-[8rem]"/>
    </>
  )
}

export default MenuProblem