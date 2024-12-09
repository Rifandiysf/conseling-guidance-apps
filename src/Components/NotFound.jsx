import { Link } from 'react-router-dom'
import NotFoundImg from '/404.svg'
import { Home } from 'iconsax-react'

const NotFound = () => {
  return (
    <section className='flex flex-col justify-center items-center h-dvh w-full'>
        <a href="https://storyset.com/online"><img src={NotFoundImg} width={350} height={350}/></a>
        <h1 className='text-5xl font-extrabold text-primary'>No results found</h1>
        <Link to={'/'} className='flex justify-center items-center bg-secondry p-2 rounded-lg font-bold mt-2'>Back To Home <Home className='ml-2' size={20} variant='Bulk'/></Link>
    </section>
  )
}

export default NotFound