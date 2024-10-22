import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DefaultUser from '../assets/DefaultUser.png'

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
          ? 'px-4 font-bold text-md '
          : 'px-4 hover:font-bold duration-300';

  return (
    <div>
        <div className='h-24 max-w-[1240px] mx-auto flex justify-between items-center'>
            <h1 className='font-bold text-3xl text-[#009688] px-6'><Link to='/'>Hello Finance!</Link></h1>
            <div className=''>
                <ul className='flex text-md'>
                    <NavLink className={linkClass} to='/'><li>Dashboard</li></NavLink>
                    <NavLink className={linkClass} to='/income'><li>Income</li></NavLink>
                    <NavLink className={linkClass} to='/expenses'><li>Expenses</li></NavLink>
                    <li className='w-[25px] mx-6 mb-1'><img className='bg-transparent' src={DefaultUser} alt="/" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar