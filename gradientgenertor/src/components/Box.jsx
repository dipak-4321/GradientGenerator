import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    
        <div style={{
          background : props.bgcolor
        }} className='h-55 w-67 rounded-2xl relative'>
          <button className='absolute right-2 bottom-2 bg-gray-700 active:scale-95 text-white px-1 py-0.5 rounded hover:bg-black' >COPY</button>
        </div>

  )
}

export default Box