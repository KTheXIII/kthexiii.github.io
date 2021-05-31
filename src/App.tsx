import { h, FunctionalComponent } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

export const App: FunctionalComponent = () => {
  const helloRef = useRef<HTMLHeadingElement | null>(null)
  let timeoutID: number

  useEffect(() => {
    if(!timeoutID)
      timeoutID = setTimeout(() => {
        helloRef.current?.classList.remove('invisible')
        helloRef.current?.classList.add('animation-500ms-ease-out')
      }, 250);
  }, [helloRef])

  return (
    <div className="app">
      <h1 ref={helloRef} className="invisible">I'm here.</h1>
    </div>
  )
}
