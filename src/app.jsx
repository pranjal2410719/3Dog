import React from 'react'
import Dog from './components/Dog'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { RiMenu3Line } from 'react-icons/ri'

const App = () => {
    const stl = {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
    }
    return (
        <>
            <main>
                <Canvas id='canvas-elem' style={stl}>
                    <Dog />
                </Canvas>
                <section id="section-1">
                    <nav>
                        <div className="nav-elm"><img src="/psit.png" alt="lol" /></div>
                        <div className="nav-elm"><h2>IGNITIA 2K26</h2></div>
                        <div className="nav-elm"><RiMenu3Line size={30} /></div>
                    </nav>
                    <div className="mid">
                        <div className="left">
                            <h1>WE</h1>
                            <h1>MAKE</h1>
                            <h1>GOOD</h1>
                            <h1>SHIT</h1>
                        </div>
                        <div className="right"></div>
                    </div>
                    <div className="bottom">
                        <div className="left"></div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet consectetur, voluptas corporis excepturi rem vel. Facere quam nulla perspiciatis deserunt nesciunt, possimus dolorem iure. Culpa maiores libero voluptatibus quibusdam ea vitae.</p>
                        </div>
                    </div>
                </section>
                <section id="section-2">
                    <div className="titles">
                        <div className="titl">
                            <small>2020 - ongoing</small>
                            <h1>Web Development</h1>
                        </div>
                        <div className="titl">
                            <small>2021 - ongoing</small>
                            <h1>Mobile Apps</h1>
                        </div>
                        <div className="titl">
                            <small>2022 - ongoing</small>
                            <h1>UI/UX Design</h1>
                        </div>
                        <div className="titl">
                            <small>2023 - ongoing</small>
                            <h1>Brand Identity</h1>
                        </div>
                        <div className="titl">
                            <small>2024 - ongoing</small>
                            <h1>Digital Marketing</h1>
                        </div>
                        <div className="titl">
                            <small>2024 - ongoing</small>
                            <h1>3D Animation</h1>
                        </div>
                    </div>
                </section>
                <section id="section-3"></section>
            </main>
        </>
    )
}

export default App