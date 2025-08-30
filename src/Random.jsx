import React from 'react'

const Random = (props) => {
    return (
        
        <div className="random-box">
        <p>Random number between {props.min} and {props.max} =&gt; 
                {Math.floor(Math.random()*props.max)}</p>
        </div>
       
    );
}

export default Random