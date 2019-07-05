import React, {useState} from 'react';
import Second from './components/second.js'

function App() {
  
  let [dog, setDog] = useState('Alf');

  let changeDog = ()=>{
    setDog(!dog ? 'yesyes' : 'Nono')
  }


  return (
    <div className="App">

      <p>My name is: {dog}</p>
        <Second changeDog={changeDog}/>
    </div>
  );
}

export default App;
