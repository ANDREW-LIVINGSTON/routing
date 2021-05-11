import React from 'react';
import styles from "./Number.module.css";


const Number = (props) => {
    return (
        <div id="box" style={{backgroundColor: props.bgColor}}>
            {isNaN(props.num)?
            <h1 style = {{color: props.txtColor}}>The Word is: {props.num}</h1>:
            <h1 style = {{color: props.txtColor}}>The Number is: {props.num} </h1>
            }
            
        </div>
    );
};



export default Number;