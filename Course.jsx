//import PropTypes from 'prop-types'

function Course(props){

   
    return(
       props.name && < div className ="card">
        
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
    );

}



export default Course