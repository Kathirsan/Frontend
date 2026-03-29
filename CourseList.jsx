import Course from './Course';
import html from './assets/HTML.jpg'
import css from './assets/CSS.jpg'
import js from './assets/JS.jpg'
import { useEffect, useState } from 'react';


function CourseList(){
    const [courses,setCourses] = useState(null);
     
         const [dummy, setDummy]=useState(true);
         const[error,setError]=useState(null);

   useEffect(()=>{
      console.log("use effect called");
      console.log(dummy);
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(Response => {
        console.log(Response);
        return Response.json()
      }).then(data => setCourses(data))
      .catch((eror)=>{
        setError(error.message);

      })
   },[]);

    function handleDelete(id){
        const newCourses = courses.filter((course)=> course.id != id)
        setCourses(newCourses);
    }

    courses.sort((x,y) => y.price - x.price)

    //const vfmCourses = courses.filter((course)=> course.price<200)

    const coursesList=courses.map(
        (course) =>
            <Course key={course.id} name={course.name}
        image={course.image}
        price={course.price} rating={course.rating} delete={handleDelete} id ={course.id}/>)

    
    return(
      
    <>
    {coursesList}
    <button onClick={()=>{setDummy(false)}}>Dummy Button</button>
      </>
    );
}
export default CourseList;