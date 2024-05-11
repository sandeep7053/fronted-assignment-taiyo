
import React from 'react'
import { useState } from 'react'

function CreateContact(onNewitem) {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();

  const handlefirstnamechange = (event) => {
    setfirstname(event.target.value)
  };

  const handlelastnamechange = (event) => {
    setlastname(event.target.value)
  };

  const handlesavebuttonchange = () => {
    onNewitem(firstname, lastname);
    setfirstname(" ");
    setlastname(" ");
  }

  return (
    <>

      <div className='text-center m-auto  mt-4 pt-3 text-xl font-xl'>
        Create Contact Screen
      </div>

      <div className='container text-center mt-4 w-96 bg-slate-200 m-auto h-60 rounded'>
        <div className='text-xl grid-rows-1 '>
          <div className='cols-8 pt-4'>
            <label htmlFor="firstname" className='mt-4'> First Name: </label>
            <input type="text" name='firstname' value={firstname} placeholder='FirstName....' className=' bg-slate-100 p-1 px-2 py-1 rounded mt-1 focus-within:outline-blue-300 rounded' onClick={handlefirstnamechange} />
          </div>

        </div>
        <div className='text-xl grid-rows-1 '>
          <div className='cols-8 pt-4'>
            <label htmlFor="lastname" className='mt-4'> Last Name: </label>
            <input type="text" name='lastname' value={lastname} placeholder='lastName....' className=' bg-slate-100 p-1 px-2 py-1 rounded mt-1 focus-within:outline-blue-300 rounded' onClick={handlelastnamechange} />
          </div>

        </div>
        <div className='text-xl grid-rows-1 mt-6 '>
          <div className='cols-8 pt-4 flex text-center justify-center'>
            <label htmlFor="status" className='mt-4 ml-4'> Status: </label>

            <div className='ml-4'>
              <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active </label>
              </div>
              <div className="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
              </div>
            </div>

          </div>

        </div>


      </div>



      <div className='flex '>
        <div className='text-center m-auto  mt-4 w-20 h-8 bg-yellow-600  rounded cursor-pointer'>
          <button type='button' className='btn btn-success text-center text-lg font-500'>Delete</button>

        </div>
        <div className='text-center m-auto mt-2 text-black font-normal w-40 h-10 bg-slate-600 rounded coursor-pointer text-bold border-black'>
          <button type='button' className='text-center p-2 font-900 text-xl' onClick={handlesavebuttonchange}> Save Contact</button>
        </div>
        <div className='text-center m-auto  mt-4 w-20 h-8 bg-red-600  rounded cursor-pointer'>
          <button type='button' className='btn btn-success text-center text-lg font-500'>Edit</button>

        </div>
      </div>



    </>
  )
}

export default CreateContact

