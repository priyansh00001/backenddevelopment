import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([]);
  useEffect(() =>{
    axios.get("/api/jokes")
    .then((response) =>{
      setJokes(response.data);
    })
    .catch((error) =>{
      console.log("error in fetching jokes", error);
    })
  })


  return (
    <>
     <h1>Kai re Halkat</h1>
     <p>JOKES : {jokes.length}</p>

     {
      jokes.map((joke) =>(
        <div key ={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
      ))}
    </>
  )
}

export default App
