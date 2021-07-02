import { h } from 'preact'
import { render } from '@testing-library/preact'
import { expect } from 'chai'

import { App } from './App'

describe('Render Text', () => {
  it('Render App', () => {
    const { container } = render(<App />)
    expect(container.textContent).match(/I'm here./i)
  })
})
