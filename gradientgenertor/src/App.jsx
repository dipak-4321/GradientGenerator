import React, { useEffect, useRef, useState } from 'react'
import Box from './components/Box'

const App = () => {
  const [inputNum, setInputNum] = useState(12)
  const [type, setType] = useState('Gradient')
  const [gradients, setGradients] = useState([])

  const inputChange =(e)=>{
    setInputNum(e.target.value)
  }
  
  const hexCodeGenerator = ()=>{
    let rgb = 256*256*256
    let random = Math.random() * rgb
    let int = Math.floor(random)
    let hexCode = int.toString(16)
    let hexColor = hexCode.padStart(6 , '0')
    return `#${hexColor}`
  }
  
  const colorGenerator = ()=>{
    const copy = []
    for(let i=0;i<inputNum;i++){
    const  color1 = hexCodeGenerator()
    const  color2 = hexCodeGenerator()
    const  degree = Math.floor(Math.random() * 360)
    
    if(type === 'Gradient'){

    const bgcolor =`linear-gradient(${degree}deg,${color1},${color2})`
    const css = `background : linear-gradient(${degree}deg,${color1},${color2})`

    copy.push(
      {gradient : bgcolor,
        code : css
       })
    }else
    {
      const bgcolor =`radial-gradient(circle,${color1},${color2})`
      const css = `background : radial-gradient(circle,${color1},${color2})`
      copy.push(
      {gradient : bgcolor,
        code : css
       })
    }

    }
    setGradients(copy)
    // console.log(copy);
    // console.log(copy[0])
    
    }

  useEffect(()=>{
    colorGenerator()
  },[inputNum,type])
  return (
    <div className='p-8'>

      <div className='flex justify-between py-4 px-6 bg-fuchsia-500 rounded-2xl mx-15' style={{
        backgroundColor : hexCodeGenerator()
      }}>
        <h1 className='font-bold text-white text-2xl'>🎨 Gradeient Generator {type}</h1>
        <div className='flex gap-6'>
          <input value={inputNum} onChange={(e)=>{
            inputChange(e)
          }} className='bg-white  rounded-lg outline-none py-0.5 px-2 w-25' type="text" placeholder='15' />
           <select onChange={(e)=>{
            setType(e.target.value)
           }} className='rounded-lg outline-none p-0.5 text-white  bg-blue-400 w-30'>
            <option value="Gradient">Gradient</option>
            <option value="Radial">Radial</option>
           </select>
        </div>
      </div>

      <div className='flex justify-center flex-wrap gap-4 my-4'>  
        {gradients.map((elem,idx)=>{
          return (
                 <Box bgcolor={elem.gradient} key={idx} code={elem.code} />
        )
      })}
      </div>
      

     
    </div>
  )
}

export default App