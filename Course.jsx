//import PropTypes from 'prop-types'

import { useState } from "react";

function Course(props){
    //let purchased = false;
    const [purchased,setPurchased] = useState(false);


    function BuyCourse(discount,e){
        console.log("purchased with",discount,"%discount");
        purchased = true;
        console.log(e);
    }

   
    return(
       props.name && < div className ="card">
        
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=> BuyCourse[20]}>Buy Now</button>
            <p>{purchased ? "Already Purchased":"Get it now"}</p>
        </div>
    );

}



export default Course