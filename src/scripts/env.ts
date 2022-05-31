export const APP_NAME       = __ENV__.APP_NAME
export const VERSION        = __ENV__.VERSION
export const COMMIT_HASH    = __ENV__.COMMIT_HASH
export const REPOSITORY_URL = __ENV__.REPOSITORY_URL
export const MODE           = __ENV__.MODE
export const PUBLIC_URL     = __ENV__.PUBLIC_URL
export const HOMEPAGE       = __ENV__.HOMEPAGE
export const SPONSOR_URL    = __ENV__.SPONSOR_URL
export const BUILD_DATE     = __ENV__.BUILD_DATE

enum EPlatform {
  Unknown = -1,
  macOS   =  0,
  Windows =  1,
  Linux   =  2,
}
type TPlatform = keyof typeof EPlatform

export function GetPlatform(): TPlatform {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Macintosh') !== -1)
    return 'macOS'
  if (userAgent.indexOf('Windows') !== -1)
    return 'Windows'
  if (userAgent.indexOf('Linux') !== -1)
    return 'Linux'

  return 'Unknown'
}

export const FORMATED_VERSION = `v${VERSION}-${COMMIT_HASH.substring(0, 7)}`
