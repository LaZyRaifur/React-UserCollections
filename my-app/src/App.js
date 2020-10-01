import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import data from './Component/data/data.json'
import Person from './Component/Persons/Person';


function App() {

  const [persons,setPersons]= useState([]);
  const [cart,setCart] = useState([]);

  
  

  useEffect(()=>{
      setPersons(data);
      
  },[])

  // console.log(data);

  const handleAddPerson = (person)=>{
    // console.log('added')
    const newCart = [...cart,person];
    setCart(newCart);
  }

  
  

  return (
    <div className="App">
    
            <h1>Total Loaded:{persons.length}</h1>
  <h5>Total Yearly Income: {cart.length}</h5>
  <Cart cart={cart}></Cart> 
            <ul>
              {
                persons.map(person=><Person person={person} key={person.id}
                   handleAddPerson={handleAddPerson}></Person>)
              }
            </ul>
    </div>
  );
}

export default App;
