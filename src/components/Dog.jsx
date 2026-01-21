import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'

const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')

  // load textures from PUBLIC folder
  const textures = useTexture({
      normalMap: '/image.png',    // <-- use correct existing path
  })

  textures.normalMap.flipY = false // REQUIRED for normal maps
  useThree(({ camera }) => {
    camera.position.set(0, 0.4, 2.5)
  })

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = textures.map
        child.material.normalMap = textures.normalMap

        // REQUIRED for GLTF normal maps
        child.material.normalMap.flipY = false

        child.material.needsUpdate = true
      }
    })
  }, [model, textures])

  return (
    <>
      <primitive
        object={model.scene}
        position={[0, -0.45, 0]}
        rotation={[0, 0.7, 0]}
        scale={1}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={2.5} />

      <OrbitControls target={[0, 0, 0]} enableDamping />
    </>
  )
}

export default Dog
