import Course from './Course';
import html from './assets/HTML.jpg'
import css from './assets/CSS.jpg'
import js from './assets/JS.jpg'
import { useEffect, useState } from 'react';


function CourseList(){
    const [courses,setCourses] = useState([{
        id:1,
         name:"HTML Full Course" ,
         price:199,
         image:html,
          rating:0
},
    {id:2,
        name :"CSS",
        price :199,
        image:css,
        rating : 5
    },
    {id:3,
        name :"JavaScript",
        price:499,
        image :js,
        rating :4

    },
    {id:4,
        name :"React",
        price:99,
        image :js,
        rating :5
    }
    ]);

   useEffect(()=>{
      console.log("use effect called")
   });

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
      </>
    );
}
export default CourseList;