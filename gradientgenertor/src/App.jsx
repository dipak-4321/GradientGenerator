import React from 'react'

const App = () => {
  return (
    <div className='p-8'>

      <div className='flex justify-between py-4 px-6 bg-fuchsia-500 rounded-2xl mx-15'>
        <h1 className='font-bold text-white text-2xl'>🎨 Gradeient Generator</h1>
        <div className='flex gap-6'>
          <input className='bg-white  rounded-lg outline-none py-0.5 px-2 w-25' type="text" placeholder='15' />
           <select className='rounded-lg outline-none p-0.5 text-white  bg-blue-400 w-30'>
            <option value="Gradient">Gradient</option>
            <option value="Radial">Radial</option>
           </select>
        </div>

      </div>
    </div>
  )
}

export default App