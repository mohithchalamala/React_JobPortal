import React from 'react'
import Button from './Button'
import InputField from '../comp/inputField'

function Salary({handleChange, handleClick}) {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div>
        <Button handleClick={handleClick} value="" title="Hourly"/>
        <Button handleClick={handleClick} value="Monthly" title="Monthly"/>
        <Button handleClick={handleClick} value="Yearly" title="Yearly"/>
      </div>
      <div>
        <label className='sidebar-label-container'>
            <input type='radio' name='test' id='test' value='' onChange={handleChange}></input>
            <span className='checkmark'></span>All
        </label>
        <InputField handlechange={handleChange} value ={30} title="<30000k" name="test"/>
        <InputField handlechange={handleChange} value ={50} title="<50000k" name="test"/>
        <InputField handlechange={handleChange} value ={80} title="<80000k" name="test"/>
        <InputField handlechange={handleChange} value ={100} title="<100000k" name="test"/>
      </div>
    </div>
  )
}

export default Salary