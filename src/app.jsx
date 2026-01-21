import React from 'react'
import Dog from './components/Dog'
import './App.css'
import { Canvas } from '@react-three/fiber'

const App = () => {
    const stl ={
        height : '100vh',
        width : '100vw',
        position : 'fixed',
        top : 0,
        left : 0,
        backgroundImage : "url(/background-m.png)",
        backgroundSize : 'cover',
    }
  return (
    <>
    <main>
        <Canvas style={stl}>
            <Dog />
        </Canvas>
        <section id="section-1"></section>
        <section id="section-2"></section>
        <section id="section-3"></section>
    </main>
    </>
  )
}

export default App