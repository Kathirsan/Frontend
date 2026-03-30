import React from 'react'

const Study = () => {
    const courses =["React","JavaScript","css","node","typescript"]
  return (
    <div>
          <ul>
    
               {courses.map((course,index)=>(
                <li>
                    {index+1}.{course}
                </li>
               ))}
          </ul>
    </div>
  )
}

export default Study