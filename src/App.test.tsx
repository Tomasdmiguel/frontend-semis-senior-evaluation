import { render, screen } from '@testing-library/react'
import App from './App'

describe('starter', () => {
  it('identifica la aplicación y aclara que falta implementar la solución', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'OpsBoard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /la solución empieza acá/i })).toBeInTheDocument()
  })
})
