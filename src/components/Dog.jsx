import React from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')

  useThree(({ camera }) => {
    camera.position.z = 0.7
    camera.position.y = 0.2
    camera.position.x = 0
  })

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.2, -0.57, 0]}
        rotation={[-0.2, 0.7, 0]}
        scale={1.1}
      />

      <directionalLight
        position={[2, 4, 5]}
        intensity={10}
      />

      <OrbitControls
        target={[0, 0, 0]}
        enableDamping
      />
    </>
  )
}

export default Dog
