
import './App.css'
import CourseList from './CourseList';

import React from 'react'
import Study from './Study';
import ProductCard from './ProductCard';
import { useState } from 'react';

function App() {

const [count,setCount] = useState(0);
  return (
    <>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)}>Increase</button>
   </>
  );
}



export default App
