
import './App.css'
import CourseList from './CourseList';

import React from 'react'
import Study from './Study';
import ProductCard from './ProductCard';
import { useState } from 'react';

function App() {
 const [username,setUserName]=useState("");
const [password,setPassword]=useState("");

  return(
    <div>
      <h1>Hello{username}</h1>
      <p>Your password is {password}</p>
    </div>
  )
}



export default App
