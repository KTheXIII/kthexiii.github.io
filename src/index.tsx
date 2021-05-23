import 'preact/devtools'
import { render, h } from 'preact'

import './style/main.scss'

import { App } from './App'

async function main() {
  const root = document.querySelector('#root')
  if (root) render(<App />, root)
}

window.onload = main
