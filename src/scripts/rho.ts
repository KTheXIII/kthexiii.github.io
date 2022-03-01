import { WebGL2Shader } from '@scripts/WebGL2/WebGL2Shader'
import { Shader } from '@scripts/Shader'
import { RhoWebGL2 } from '@scripts/WebGL2/WebGL2'
import { RhoRenderer } from '@scripts/Renderer'

/**
 * Rho is a wrapper for managing animation loop
 */
export abstract class Rho {
  constructor(parent: HTMLElement) {
    this._canvas = document.createElement('canvas')
    this._canvas.style.width  = '100%'
    this._canvas.style.height = '100%'
    parent.appendChild(this.canvas)
  }

  async start(): Promise<void> {
    await this.init()
    this.loop(0)
  }
  resume(): void {
    this.loop(this._currentTime)
  }
  stop(): void {
    if (this._animationID === -1) return
    cancelAnimationFrame(this._animationID)
    this._animationID = -1
  }
  destroy(): void {
    this.stop()
    this.clean()
    this.canvas.remove()
  }

  get canvas(): HTMLCanvasElement { return this._canvas }
  get time():   number { return this._currentTime  }
  get width():  number { return this.canvas.width  }
  get height(): number { return this.canvas.height }
  get ratio():  number { return this.canvas.width / this.canvas.height }

  onMouseMove(e: MouseEvent):   void {/* NOP */}
  onMouseClick(e: MouseEvent):  void {/* NOP */}
  onMouseDown(e: MouseEvent):   void {/* NOP */}
  onMouseUp(e: MouseEvent):     void {/* NOP */}
  onMouseWheel(e: WheelEvent):  void {/* NOP */}
  onTouchStart(e: TouchEvent):  void {/* NOP */}
  onTouchMove(e: TouchEvent):   void {/* NOP */}
  onTouchEnd(e: TouchEvent):    void {/* NOP */}
  onKeyDown(e: KeyboardEvent):  void {/* NOP */}
  onKeyUp(e: KeyboardEvent):    void {/* NOP */}
  onKeyPress(e: KeyboardEvent): void {/* NOP */}

  /**
   * Can be register to resize event. Called when window is resized.
   * @note When overriding this method, call `super.resize(e)`
   * @param e UI event
   */
  onResize(e: UIEvent): void {
    this.canvas.width  = this.canvas.clientWidth * devicePixelRatio
    this.canvas.height = this.canvas.clientHeight * devicePixelRatio
  }

  protected abstract init(): Promise<void>
  protected abstract update(dt: number): void
  protected abstract render(dt: number): void
  protected clean(): void { /* NOP */}

  private loop(time: number): void {
    this._currentTime = time
    this._deltaTime   = (this._currentTime - this._previousTime) / 1000
    this.update(this._deltaTime)
    this.render(this._deltaTime)
    this.resize()
    this._previousTime = this._currentTime
    this._animationID = requestAnimationFrame(this.loop.bind(this))
  }
  private resize(): void {
    const width  = Math.round(this.canvas.clientWidth  * devicePixelRatio)
    const height = Math.round(this.canvas.clientHeight * devicePixelRatio)
    if (this.width != width || this.height != height) {
      this.canvas.width = width
      this.canvas.height = height
    }
  }
  private _currentTime  =  0
  private _deltaTime    =  0
  private _previousTime =  0
  private _animationID  = -1

  protected _canvas: HTMLCanvasElement
}

async function shader(renderer: RhoRenderer,
  vert: string, frag: string): Promise<Shader> {
  const vertSource = await fetch(vert).then(r => r.text())
  const fragSource = await fetch(frag).then(r => r.text())
  return new WebGL2Shader(renderer, vertSource, fragSource)
}

function create(rho: Rho): RhoRenderer {
  return new RhoWebGL2(rho.canvas)
}

export default {
  create,
  shader,
}
