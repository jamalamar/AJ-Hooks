import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [dog, setDog] = useState('Alf');

  let changeDog = ()=>{
    setDog(!dog ? 'yesyes' : 'Nono')
  }


  return (
    <div className="App">

      <p>My name is: {dog}</p>
      <button onClick={()=> changeDog()}>DOG</button>

    </div>
  );
}

export default App;
