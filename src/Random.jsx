import React from 'react'

const Random = (props) => {
    return (
        <div>
            <h1>Random</h1>
            <p>Random number between {props.min} and {props.max}: </p>
            <p>{Math.floor(Math.random()*props.max)}</p>
        </div>
    );
}

export default Random