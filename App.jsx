
import './App.css'
import CourseList from './CourseList';

import React from 'react'
import Study from './Study';
import ProductCard from './ProductCard';
import { useState,useEffect } from 'react';

/*function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Hello{username}</h1>
      <p>Your password is {password}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Username:", username);
          console.log("Password:", password);
          setUserName("");
          setPassword("");
        }}>

        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" disabled={!username || !password}>Submit</button>
      </form>


    </div>
  )
}*/

const App = () =>{
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("Component Mounted");
    return()=>{
  },[count])
  return(
    <div>
      <h1>my app</h1>
    </div>
  )
}



export default App
