import InputSearch from "./InputSearch"


const HeaderSetting = ({title}) => {
  return (
    <section className="ml-[300px] mr-[20px] my-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex justify-center items-center gap-8">
            <InputSearch NameSearch={'Search Setting'}/>
        </div>
    </section>
  )
}

export default HeaderSetting