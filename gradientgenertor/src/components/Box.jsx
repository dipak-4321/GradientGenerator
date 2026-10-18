import React from 'react'

const Box = (props) => {
  console.log(props)
  // const copyCode = ()=> {
  //   navigator.clipboard.writeText(props.code)
  // }
  return (
    
        <div style={{
          background : props.bgcolor
        }} className='h-55 w-67 rounded-2xl relative'>
          <button onClick={()=> {
    navigator.clipboard.writeText(props.code)
  }} className='absolute right-2 bottom-2 bg-gray-700 active:scale-95 text-white px-1 py-0.5 rounded hover:bg-black' >COPY</button>
        </div>

  )
}

export default Box