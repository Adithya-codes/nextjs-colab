import React from "react"


function Startbutton({ setValue ,setConnection ,setTransaction }) {

    const handleClick = ()=>
    {
        setValue(1)
        setConnection('')
        setTransaction('')
        alert('click')
       
    }
  return (
    <button onClick={ handleClick}
   className="underline">
      start over
    </button>
  )
}

export default Startbutton
