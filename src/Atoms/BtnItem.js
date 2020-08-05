import React from 'react';

function handleClick() {
    console.log('this is:', this);
  }


function BtnItem(props){

   return(
          <>

         <button onClick={handleClick()}>
           {props.name}
         </button>


         </>
   )



} 


export default BtnItem;