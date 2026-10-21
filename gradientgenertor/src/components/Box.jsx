import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

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
    toast.success("Code copied sucessfully" ,{position: 'top-center'} )
  }} className='absolute right-2 bottom-2 bg-gray-700 active:scale-95 text-white px-1 py-0.5 rounded hover:bg-black' >COPY</button>
       <ToastContainer />
        </div>
   
  )
}

export default Box