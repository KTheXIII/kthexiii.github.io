import 'preact/devtools'
import { h, render } from 'preact'

import './style/index.scss'

import { App } from './App'

async function main() {
  const root = document.querySelector('#root')
  if (root) render(<App />, root)
}

window.onload = main
