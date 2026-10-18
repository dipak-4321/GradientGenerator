import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    
        <div style={{
          background : props.bgcolor
        }} className='h-55 w-67 rounded-2xl relative'>

        </div>

  )
}

export default Box