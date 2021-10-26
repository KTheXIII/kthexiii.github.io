import { h, FunctionalComponent as Func } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import './app.css'

export const App: Func = () => {
  const [css, setCSS] = useState('opacity-0')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCSS('opacity-100')
    }, 250)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="app flex h-full">
      <h1 className={`m-auto font-mono text-3xl font-light
        ${css} transition-opacity duration-500 ease-out`}
      >
      I'm here.
      </h1>
    </div>
  )
}
