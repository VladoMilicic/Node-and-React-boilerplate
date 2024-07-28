import { useState, useEffect } from "react";
function Users() {
    const [data,setData]=useState([]);
    const getData= async ()=>{

      const response =await fetch('http://localhost:5001/customers'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        const data = await response.json();
        console.log(data)
         setData(data)
        };

    useEffect(()=>{
      getData()
    },[]);
    return (
      <div className="App">
       {
         data && data.length>0 && data.map((item)=><p key ={item.CustomerID}>{item.customer_name}</p>)
       }
      </div>
    );
  
}
  export default Users;