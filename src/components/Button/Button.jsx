import React from 'react'
import './Button.css'

//sintaxis de destructuración
const Button = ({ text, className}) => {
  return (
    <button className={`custom-button ${className}`} >
      {text}
    </button>
  )
};

export default Button;
