import React from 'react'

const IdCard = (props) => {
        
   return ( 
   <div className="card">
        <div className="card-image"><img  src={props.picture} alt='Profile picture'></img></div>
        <div className="card-text">
        <p><b>First Name:</b> {props.firstName}</p>
        <p><b>Last Name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}cm</p>
        <p><b>Birth:</b> {props.birth.toDateString()}</p>
        </div>
    </div>
    )
}

export default IdCard