import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [color, setColor] = useState('olive')

  const changeColor =(color)=>{
    setColor(color)
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600' onClick={()=> changeColor('red')}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-400' onClick={()=> changeColor('green')}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-700' onClick={()=> changeColor('blue')}>Blue</button>
      </div>
    </div>
  )
}

export default App
