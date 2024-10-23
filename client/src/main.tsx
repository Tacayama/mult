import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './__test__/Test.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Test />
  </StrictMode>,
)
