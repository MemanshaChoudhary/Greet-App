import React from 'react'

const Input = ({lbl,placeholder, inputKey, fn}) => {

  const takeInput = (event) =>{
  //  console.log('event recieved',  event.target.value);
    fn(event.target.value, inputKey);
  }
 
  return (
    <div className="form-group">
    <label >{lbl}</label>
    <input onChange={takeInput} className="form-control" type='text' placeholder={placeholder}></input>
    </div>
  )
}

export default Input