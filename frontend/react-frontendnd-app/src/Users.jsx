import { useState, useEffect } from "react";
function Users() {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('http://localhost:5001/customers'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(response =>{
          console.log(response)
          return response.json();
        })
        .then(myJson=> {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    return (
      <div className="App">
       {
         data && data.length>0 && data.map((item)=><p key ={item.CustomerID}>{item.customer_name}</p>)
       }
      </div>
    );
  }
  
  export default Users;