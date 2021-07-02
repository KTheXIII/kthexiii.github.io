import { h, FunctionalComponent as Func } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

export const App: Func = () => {
  const helloRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      helloRef.current?.classList.remove('invisible')
      helloRef.current?.classList.add('animation-500ms-ease-out')
    }, 250)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="app">
      <h1 ref={helloRef} className="invisible">I'm here.</h1>
    </div>
  )
}
