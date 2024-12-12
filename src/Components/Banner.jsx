import banner1 from "/Banner.svg"

const Banner = () => {
  return (
    <div className="col-span-5 row-span-1 flex justify-left items-center overflow-hidden relative rounded-xl bg-primary max-sm:col-span-3 max-sm:row-span-1">
      <h1 className="ml-8 text-xl font-extrabold text-body max-sm:w-40 max-sm:text-sm max-sm:ml-4">Pahami psikologi untuk mengerti pikiran dan tumbuh bersama</h1>
      <img src={banner1} className="absolute bottom-[-10px] right-0 max-sm:w-[241px]"/>
    </div>
  )
}

export default Banner