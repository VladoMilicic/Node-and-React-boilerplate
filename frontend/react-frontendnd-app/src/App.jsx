import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [array, setArray] = useState([])
  const fetchApi = async ()=> {
    const response = await axios.get("http://localhost:5001/api");
    setArray(response.data.fruits)
    console.log(response.data.fruits)
  }
  useEffect(()=> {
    fetchApi()
  }, [])
  return (
    <>
      <div>
      {array.map((fruit, index)=>(
        <div key={index}>
          <p>{fruit}</p>
        </div>)
        )}
      
      </div>
    </>
  )
}

export default App
