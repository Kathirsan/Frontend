import Course from './Course';
import html from './assets/HTML.jpg'
import css from './assets/CSS.jpg'
import js from './assets/JS.jpg'



function CourseList(){
    const courses =[{
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
    ]

    courses.sort((x,y) => y.price - x.price)

    const vfmCourse = courses.filter((course)=> course.price<200)

    const coursesList=vfmCourses.map(
        (course,index) =>
            <Course key={index} name={course.name}
        image={course.image}
        price={course.price} rating={course.rating}/>)

    
    return(
      
    <>
    {coursesList}
      </>
    );
}
export default CourseList;