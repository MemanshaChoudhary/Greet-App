import React from 'react'

const Button = ({btn, cssclass,fn}) => {

  return (<>
   <button onClick={fn} className={cssclass} >{btn}</button>
   </>
  )
}

export default Button