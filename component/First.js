import React from 'react'


function First(firstname, lastname, onDeleteClick) {
  return (
    < >
      <div className='container m-auto'>
        <div>
          <div className='cols-4'>
            {firstname}
          </div>
          <div className='cols-4'>
            {lastname}
          </div>
          <div className='cols-2'>
            <button type='button ' className='btn btn-danger' onClick={() => onDeleteClick(firstname)}> Delete</button>

          </div>

        </div>

      </div>

    </>
  )
}

export default First
