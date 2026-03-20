//import PropTypes from 'prop-types'

import { useState } from "react";

function Course(props){
    //let purchased = false;
    const [purchased,setPurchased] = useState('false');
    

    function BuyCourse(discount){
        console.log(props.name,"purchased with",discount,"%discount");
        setPurchased('true');
       
        console.log(purchased);
    }

   
    return(
       props.name && < div className ="card">
        
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=> {BuyCourse(20)}}>Buy Now</button>
            <button onClick={}>Delete</button>
            <p>{purchased }</p>
        </div>
    );

}



export default Course