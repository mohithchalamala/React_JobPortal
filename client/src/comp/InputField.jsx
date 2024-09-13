import React from 'react'

function InputField({handlechange, value, title, name}) {
  return (
  <label className='sidebar-label-container'>
    <input type='radio' name={name} value={value} onChange={handlechange}></input>
    <span className='checkmark'></span>{title}
  </label>  
  )
}

export default InputField