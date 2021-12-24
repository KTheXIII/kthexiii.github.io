import {
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  Vector2,
  LineBasicMaterial,
  BufferGeometry,
  Vector3,
  Line,
} from 'three'

export class Rho {
  init(renderer: WebGLRenderer) {
    this.renderer = renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x0b0b0b)

    this.scene = new Scene()
    this.camera = new PerspectiveCamera(45,
      window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.set(0, 0, 10)

    const material = new LineBasicMaterial({ color: 'white' })
    const geometry = new BufferGeometry().setFromPoints([
      new Vector3(0.5, 0, 0),
      new Vector3(2, 0, 0),
    ])
    this.lines.push(new Line(geometry, material))
    this.lines[0].rotateZ(0)
    this.lines.push(new Line(geometry, material))
    this.lines[1].rotateZ(Math.PI)
    this.lines.push(new Line(geometry, material))
    this.lines[2].rotateZ(Math.PI / 2)
    this.lines.push(new Line(geometry, material))
    this.lines[3].rotateZ(-Math.PI / 2)

    for (const line of this.lines)
      this.scene.add(line)
  }

  /**
   * @param dt Frame time in seconds
   */
  update(dt: number) {
    for (const line of this.lines) {
      line.rotateZ((Math.PI / 15) * dt)
    }
  }

  /**
   * @param dt Frame time in seconds
   */
  render(dt: number) {
    this.renderer.render(this.scene, this.camera)
  }

  onMouseMove(x: number, y: number) {
    this.mouse = new Vector2(x, y)
  }
  onMouseClick(e: MouseEvent) {
    //
  }
  onMouseDown(e: MouseEvent) {
    //
  }
  onKeyDown(e: KeyboardEvent) {
    //
  }
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  private lines: Line<BufferGeometry, LineBasicMaterial>[] = []
  private mouse: Vector2 = new Vector2()

  private renderer!: WebGLRenderer
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera
}
