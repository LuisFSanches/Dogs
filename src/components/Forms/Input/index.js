import React from 'react'

import './style.css'

export default function Input({label, type, name, value, onChange, error, onBlur}) {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={name}>{label}</label>
      <input 
      id={name} 
      name={name} 
      className="input" 
      type={type} 
      value={value} 
      onChange={onChange}
      onBlur={onBlur}/>
     

      {error && <p className="error">{error}</p>}
    </div>
  )
}
