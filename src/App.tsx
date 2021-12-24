import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import { WebGLRenderer } from 'three'
import { Rho } from '@scripts/rho'
import './app.css'

export const App: React.FC = () => {
  const displayRef = useRef<HTMLDivElement>(null)
  const rho = useMemo(() => new Rho(), [])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    rho.onKeyDown(e)
  }, [rho])
  const onClick = useCallback((e: MouseEvent) => {
    rho.onMouseClick(e)
  }, [rho])
  const onMouseMove = useCallback((e: MouseEvent) => {
    rho.onMouseMove(e.clientX, e.clientY)
  }, [rho])
  const onMouseDown = useCallback((e: MouseEvent) => {
    rho.onMouseDown(e)
  }, [rho])
  const onResize = useCallback((e: UIEvent) => {
    rho.onResize()
  }, [rho])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
    }
  }, [onKeyDown, onClick, onMouseMove, onMouseDown, onResize])

  useEffect(() => {
    if (!displayRef.current) return
    const ref = displayRef.current
    const renderer = new WebGLRenderer()
    ref.appendChild(renderer.domElement)
    rho.init(renderer)
    return () => {
      renderer.dispose()
      ref.removeChild(renderer.domElement)
    }
  }, [displayRef, rho])

  useEffect(() => {
    let animationID = -1
    let lastTime = - 1 / 60
    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000
      rho.update(delta)
      rho.render(delta)
      lastTime = time
      animationID = requestAnimationFrame(loop)
    }
    loop(lastTime)
    return () => {
      cancelAnimationFrame(animationID)
    }
  }, [rho])

  return (
    <div ref={displayRef} className='app w-full h-full'>
    </div>
  )
}
