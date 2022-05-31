import React, { useRef } from 'react'
import './app.css'

export default function App() {
  const displayRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={displayRef} className='app w-full h-full grid'>
      <h1 className='m-auto text-4xl animate-pulse font-mono
                     hover:text-mred hover:animate-none
                     transition-colors duration-500 hover:ease-out
                     cursor-default'>
        Hello, World!
      </h1>
    </div>
  )
}
