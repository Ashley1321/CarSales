import logo from './logo.svg';
import './App.css';

import AddCars from './addCars'
import React, {useState, useEffect} from 'react';
import DisplayBookmark from './display';




function App() {

  const [Payment, setPayment] = useState([]);
  useEffect(()=> {
    console.log(Payment);

  },[Payment])
  const addPayment = ((_cars)=>{
    setPayment((cars)=>[...cars,
      _cars
    ])

    const store = localStorage.setItem('store',JSON.stringify(Payment))
     console.log("saved", JSON.parse(localStorage.getItem('store')));
    
  })
   
  // const addPayment =((carName, price, Warantee)=>{

  //   setPayment((Payment)=>[...Payment,{
  //     carName:carName,
  //     price:price,
  //     Warantee:Warantee
  //   }])
  //   console.log(Payment);
  // })


  return (
    <div className="container">
       <AddCars AddtoCart={addPayment}/>
       <DisplayBookmark list={Payment} />
     
    </div>
  );
}

export default App;
