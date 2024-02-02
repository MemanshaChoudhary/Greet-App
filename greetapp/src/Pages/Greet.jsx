import Message from "../Components/Message";
import Input  from "../Components/Input";
import Button from "../Components/Button";

import { useState } from "react"
export const Greet = () => {
    const firstKey="first";
    const secondKey="second";
   const [message, setMessage] = useState('');
    const names= {};
    const recDataFromChild = (data,Key) =>{

    names[Key] = data;
    // console.log(names);

   }


const justGreet=()=>{
//console.log('event');
setMessage(initCap(names[firstKey]) + " " + initCap(names[secondKey]));
//console.log(message);
}
let initCap = (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();

   
   const clearAll = () =>{
console.log("clear alllll");
setMessage('');
   }
return(
    <div> 
    <Message msg="Greet App" myclass="info"/>
    <Input  fn= {recDataFromChild} inputKey={firstKey} lbl='First Name: ' placeholder='type your first name...'/>
    <Input  fn= {recDataFromChild} inputKey={secondKey} lbl='Last Name: ' placeholder='type your last name...' />
    <Button  fn={justGreet} btn='greet' cssclass="btn btn-primary"/>
    <Button  fn={clearAll} btn='clear all' cssclass="btn btn-secondary"/>
    {message && <Message  myclass="success" msg={message}/>}
    </div>
)

}