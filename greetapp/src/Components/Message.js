import React from 'react'

const Message = ({msg,myclass}) => {
  
const cssclass = `alert alert-${myclass} text-center `;
  return (
    <>
    {/* <h1 className={cssclass}> Welcome-{msg}</h1> */}
    {msg && <h1 className={cssclass}> Welcome {msg}</h1>  }

     </>
  )
}
export default Message

