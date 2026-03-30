
import './App.css'
import CourseList from './CourseList';

import React from 'react'
import Study from './Study';
import ProductCard from './ProductCard';

function App() {

  return (
    <>
   <ProductCard title="laptop" price={50000}/>
  < ProductCard title="phone" price={10000}/>
   </>
  );
}



export default App
