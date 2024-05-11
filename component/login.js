import React from 'react'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im";



function login() {
  return (
    <>

      <div className='text-center bg-blue-600 text-2xl font-bold text-white p-5'>
        Contact Pages
      </div>


      <div className='container m-auto mt-16 text-center font-bold text-4xl w-80 border-4 rounded p-4 cursor-pointer gap-2 border-slate-800 text-green-600 '>
        <Link className='container m-auto mt-4' to='/CreateContact' > CreateContact
        </Link>

      </div>
      <div className='container m-auto mt-20 items-center flex justify-center border-4 border-slate-800 w-96 p-4 cursor-pointer text-bold rounded'>
        <span className=''>
          <ImCross className='w-9 h-8 items-center m-auto' />

        </span>
        <span className='ml-6 text-xl font-bold rounded '>
          No Contact Found <br></br>
          Please add contact from <br />
          Create Contact Button
        </span>


      </div>
    </>


  )
}

export default login
