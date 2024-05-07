import React, { useState } from 'react'


const Button = ({types,text,variant,icons,onclick}) => {

  return (
   <>
    <button onClick={onclick} className={`${types} ${variant} d-flex align-items-center justify-content-center gap-2`}>{text}{icons}</button>
   </>
  )
}

export default Button;