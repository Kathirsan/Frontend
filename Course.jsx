//import PropTypes from 'prop-types'

function Course(props){
    function BuyCourse(discount,e){
        console.log("purchased with",discount,"%discount");
        console.log(e);
    }

   
    return(
       props.name && < div className ="card">
        
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=> BuyCourse[20]}>Buy Now</button>
        </div>
    );

}



export default Course