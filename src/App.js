
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
   const [myAction, setMyAction] = useState('');


   useEffect (()=> {
    getAction();
   }, [])
   
   const getAction = async ()=> {
    const response = await fetch (`https://www.boredapi.com/api/activity/ `)
    const data = await response.json();
    console.log(data);
    setMyAction(data.activity)
   }


  return (
    <div className='container up'>
      <div className='App'>
      <div className='container up'>
      <h1 className='header'>Are you bored? Click and find out what you can do!</h1>
      </div>
      <div className='container'>
     <h2 className='action'>{myAction}</h2>
     </div>
     <div className='container up btn'>
     <button className='btn__tip' onClick={getAction}>New Tip</button>
     </div>
     </div>
    </div>
  );
}

export default App;
