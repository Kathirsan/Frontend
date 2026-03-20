//import PropTypes from 'prop-types'

function Course(props){
    function BuyCourse(discount){
        console.log("purchased");
    }

   
    return(
       props.name && < div className ="card">
        
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={BuyCourse}>Buy Now</button>
        </div>
    );

}



export default Course