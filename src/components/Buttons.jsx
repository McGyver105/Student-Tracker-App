import React from 'react';

const Buttons = (props) => {
    return (
        <div className="buttonsContainer">
            <button id='be' onClick={props.handleClick}>Show Backend Students</button>
            <button id='fe' onClick={props.handleClick}>Show Frontend Students</button>
            <button id='fun' onClick={props.handleClick}>Show Fundamentals Students</button>
            <button id='proj' onClick={props.handleClick}>Show Project Block Students</button>
            <button id='all' onClick={props.handleClick}>Show All Students</button>
        </div>
    );
};

export default Buttons;