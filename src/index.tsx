import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

async function main() {
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
