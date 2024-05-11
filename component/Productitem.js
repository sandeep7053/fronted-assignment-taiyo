import React, { useState } from 'react'
import CreateContact from './CreateContact';
import WelcomeMessage from './WelcomeMessage';
import ITemlastName from './ITemlastName';


function Productitem() {

  const [todoitems, settodoitems] = useState([]);
  const handleNewitem = (itemname, itemlast) => {
    const newtodoitems = [
      ...todoitems,
      { name: itemname, last: itemlast },
    ];
    settodoitems(newtodoitems);

  }

  const handleDeleteitems = (todoitemname) => {
    const newtodoitems = todoitems.filter((item) => item.name !== todoitemname);
    settodoitems(newtodoitems);
  };




  return (
    <>
      <div className='text-center bg-blue-600 text-2xl font-bold text-white p-5'>
        Contact Pages
      </div>
      <div className='container m-auto text-center'>
        <CreateContact onNewitem={handleNewitem} />
        {
          todoitems.length === 0 && <WelcomeMessage />
        }
        <ITemlastName
          todoitems={todoitems}
          onDeleteClick={handleDeleteitems}
        />


      </div>


    </>
  )
}

export default Productitem
