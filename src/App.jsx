import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-[100vh] bg-black'>
      <p className='text-2xl font-SpecialElite text-white'>Menu</p>
    </div>
  )
}

export default App
