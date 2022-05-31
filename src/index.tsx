import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import {
  APP_NAME,
  VERSION,
  COMMIT_HASH,
  BUILD_DATE,
  REPOSITORY_URL,
  SPONSOR_URL,
} from './scripts/env'

const info = `
${APP_NAME} - v${VERSION}-${COMMIT_HASH.slice(0, 7)}
build date: ${BUILD_DATE}
bug report: ${REPOSITORY_URL}/issues
sponsor me on github: ${SPONSOR_URL}
`.trim()

async function main() {
  console.info(info)

  const container = document.querySelector('#root')
  if (!container) throw new Error('No #root container!')
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

window.onload = main
