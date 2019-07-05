import React, {useState} from 'react';


export default function Second(props) {
  
  return (
    <div>    
      <button onClick={()=> props.changeDog()}>DOG</button>
    </div>
  );
}

