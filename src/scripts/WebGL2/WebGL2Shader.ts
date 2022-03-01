import { RhoRenderer } from '@scripts/Renderer'
import { Shader } from '@scripts/Shader'

export class WebGL2Shader extends Shader {
  constructor(renderer: RhoRenderer, vertex: string, fragment: string) {
    super()
    this.gl = renderer.getNative() as WebGL2RenderingContext
    this.rendererID = this.create(vertex, fragment)
  }

  bind(): void {
    this.gl.useProgram(this.rendererID)
  }

  private create(vertex: string, fragment: string): WebGLProgram {
    const program = this.gl.createProgram()
    if (!program) throw new Error('Failed to create shader program')
    const vs = this.compile(this.gl.VERTEX_SHADER, vertex)
    const fs = this.compile(this.gl.FRAGMENT_SHADER, fragment)
    this.gl.attachShader(program, vs)
    this.gl.attachShader(program, fs)
    this.gl.linkProgram(program)
    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      const info = this.gl.getProgramInfoLog(program)
      throw new Error(`An error occurred linking the program: ${info}`)
    }

    this.gl.deleteShader(vs)
    this.gl.deleteShader(fs)
    return program
  }

  private compile(type: number, source: string): WebGLShader {
    const shader = this.gl.createShader(type)
    if (!shader) throw new Error('Failed to create shader')
    this.gl.shaderSource(shader, source)
    this.gl.compileShader(shader)
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const info = this.gl.getShaderInfoLog(shader)
      this.gl.deleteShader(shader)
      throw new Error(`An error occurred compiling the shaders: ${info}`)
    }
    return shader
  }

  private gl: WebGL2RenderingContext
  private rendererID: WebGLProgram
}
