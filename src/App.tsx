import React, { useRef } from 'react'
import './app.css'

export default function App() {
  const displayRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={displayRef} className='app w-full h-full grid'>
      <h1 className='m-auto text-4xl animate-pulse font-mono'>Hello, World!</h1>
    </div>
  )
}
