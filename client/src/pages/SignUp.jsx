import React from 'react'
import {Link} from 'react-router-dom'
export default function SignUp() {
  return (
    <>
     <div className="p-3 max-w-96 mx-auto">
        <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='Username' className='border p-3 rounded-lg'required/>
          <input type='email' placeholder='@Email' className='border p-3 rounded-lg'required/>
          <input type='password' placeholder='Password' className='border p-3 rounded-lg'required/>
          <button className='bg-slate-700 rounded-md p-2 uppercase hover:opacity-90 disabled:opacity-60'>
            <h1 className='text-mg font-medium text-slate-100'>Sign Up</h1>
          </button>
          <button className='bg-gradient-to-r from-yellow-400 to-red-500 rounded-md p-2 uppercase hover:opacity-90 disabled:opacity-60'>
            <h1 className='text-md font-normal text-slate-100'>Continue With Google</h1>
          </button>
        </form>
        <div className="flex gap-2 mt-4 font-medium text-sm">
          <p>Have an account?</p>
          <Link to = "/sign-in">
            <span className='text-blue-500 hover:text-opacity-85'>Sign in</span>
          </Link>
        </div>
      </div> 
    </>
  )
}
