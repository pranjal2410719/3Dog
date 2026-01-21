import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import Dog from './components/Dog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas style={{height: '100vh', width: '100vw'}}>
      <Dog />
    </Canvas>
  </StrictMode>,
)
