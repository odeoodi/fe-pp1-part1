import React from 'react'

const IdCard = (props) => {
        
   return ( 
   <div>
        <img src={props.picture}></img>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}cm</p>
        <p>Birthdate: {props.birth.toDateString()}</p>
    </div>
    )
}

export default IdCard