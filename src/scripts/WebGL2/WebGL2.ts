import {
  EAPI,
  RhoRenderer,
  TColor
} from '@scripts/Renderer'

export class RhoWebGL2 extends RhoRenderer {
  constructor(canvas: HTMLCanvasElement) {
    super()
    const gl = canvas.getContext('webgl2')
    if (gl) this.gl = gl
    else throw new Error('WebGL2 is not supported')
  }

  setClearColor(color: TColor, alpha = 1): void {
    if (typeof color === 'number') {
      const red   = (color & 0xff0000) >> 16
      const green = (color & 0x00ff00) >> 8
      const blue  = (color & 0x0000ff) >> 0
      this.gl.clearColor(red / 255, green / 255, blue / 255, alpha)
    } else if (color instanceof Array) {
      this.gl.clearColor(color[0], color[1], color[2], alpha)
    }
  }

  clear(mask: number): void {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }

  getNative(): unknown { return this.gl }
  getAPI(): EAPI { return EAPI.WebGL2 }

  private gl: WebGL2RenderingContext
}
