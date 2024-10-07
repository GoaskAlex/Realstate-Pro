import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <>
        <header className="bg-slate-400 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <div className="">
                <Link to ='/'>
                    <h1 className='font-bold text-sm sm:text-xl'>Johns Estate</h1>
                </Link>
            </div>
            <form className='bg-slate-300 p-3 rounded-lg flex items-center'>
                <input className='rounded-sm bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='Search...'></input>
                <FaMagnifyingGlass className='text-slate-500' />
            </form>
            <div className="">
                <ul className=' hidden sm:flex gap-2  '>
                    <Link to ="/">
                        <li className='hover:underline text-slate-700'>Home</li>
                    </Link>
                    <Link to="/about">         
                        <li className='hover:underline text-slate-700'>About</li>
                    </Link>                       
                    <Link to="/sign-up">
                        <li className='hover:underline text-slate-700'>SignIn</li>
                    </Link>                 
                </ul>
            </div>
            </div>
        </header> 
    </>
  )
}
