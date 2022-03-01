import React, {
  useRef,
  useEffect,
} from 'react'
import './app.css'
import Renderer, { Rho } from '@scripts/Rho'
import { RhoRenderer } from '@scripts/Renderer'
import { Shader } from '@scripts/Shader'

import FragShader from '@shaders/shader.frag'
import VertShader from '@shaders/shader.vert'

class Hello extends Rho {
  async init() {
    this.renderer = Renderer.create(this)
    const bg = window.getComputedStyle(document.body).backgroundColor
    const color = bg.replace(/(?:rgb\()([0-9, ]+)(?:\))/g, '$1').split(',').map(v => parseInt(v, 0) / 255)
    this.renderer.setClearColor([color[0], color[1], color[2]])

    this.shader = await Renderer.shader(this.renderer, VertShader, FragShader)
  }

  update(dt: number): void {
    // TODO: update logic
  }

  render(dt: number): void {
    this.renderer.clear()
  }

  private renderer!: RhoRenderer
  private shader!: Shader
}

export const App: React.FC = () => {
  const displayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = displayRef.current
    if (!element) return
    const rho = new Hello(element)
    const onMouseMove  = (e: MouseEvent) => rho.onMouseMove(e)
    const onMouseClick = (e: MouseEvent) => rho.onMouseClick(e)
    const onMouseDown  = (e: MouseEvent) => rho.onMouseDown(e)
    const onMouseUp    = (e: MouseEvent) => rho.onMouseUp(e)
    const onMouseWheel = (e: WheelEvent) => rho.onMouseWheel(e)
    const onTouchStart = (e: TouchEvent) => rho.onTouchStart(e)
    const onTouchMove  = (e: TouchEvent) => rho.onTouchMove(e)
    const onTouchEnd   = (e: TouchEvent) => rho.onTouchEnd(e)
    const onKeyDown    = (e: KeyboardEvent) => rho.onKeyDown(e)
    const onKeyUp      = (e: KeyboardEvent) => rho.onKeyUp(e)
    const onKeyPress   = (e: KeyboardEvent) => rho.onKeyPress(e)
    rho.start()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onMouseClick)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('wheel', onMouseWheel)
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('keypress', onKeyPress)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onMouseClick)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('wheel', onMouseWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('keypress', onKeyPress)
      rho.destroy()
      element.innerHTML = ''
    }
  }, [])

  return (
    <div ref={displayRef} className='app w-full h-full grid'>
    </div>
  )
}
