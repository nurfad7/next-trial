import { FC } from 'react'
import Link from 'next/link'

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center h-14 w-full px-16 absolute z-10'>
      <Link href='/'>@Ayush Barnwal</Link>
      <div className='flex gap-8'>
        <a href='/#about'>About</a>
        <a href='/#work'>Work</a>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;