import React from 'react'

const Box = ({hexCodeGenerator}) => {
  return (
    
        <div style={{
          background : hexCodeGenerator()
        }} className='h-55 w-67 rounded-2xl'></div>

  )
}

export default Box