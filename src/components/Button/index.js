import React from 'react';
import './Button.css';

const Button = (props) => (
    <button className="changeimage-button" onClick={props.change}> Get New Image </button>
)

export default Button;
