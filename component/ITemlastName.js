import React from 'react'
import First from '../component/First';

function ITemlastName({ todoitems, onDeleteClick }) {
  return (
    <>
      <div className='container m-auto text-center'>
        {
          todoitems.map((item) => (
            <First
              firstname={item.name}
              lastname={item.last}
              onDeleteClick={onDeleteClick}
            >
            </First>
          ))
        }


      </div>

    </>
  )
}

export default ITemlastName
