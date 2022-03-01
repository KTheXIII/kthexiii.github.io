import { Rho } from '@scripts/Rho'
import { Shader } from '@scripts/Shader'
import { WebGL2Shader } from '@scripts/WebGL2/WebGL2Shader'

export type TColor = number | [number, number, number]

export enum EAPI {
  WebGL,
  WebGL2,
}

export abstract class RhoRenderer {
  abstract setClearColor(color: TColor, alpha?: number): void
  abstract clear(mask?: number): void
  abstract getNative(): unknown
  abstract getAPI(): EAPI
}
