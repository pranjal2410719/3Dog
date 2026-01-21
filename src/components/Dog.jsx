import React, { Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')

  useThree(({ camera }) => {
    camera.position.set(0, 0.2, 1)
  })

  model.scene.traverse((child) => {
    if (child.name.includes('DOG')) {
      console.log(child.name)
    }
  })

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.2, -0.59, 0]}
        rotation={[-0.3, 0.68, -0.009]}
        scale={1.1}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2, 4, 5]}
        intensity={2}
      />

      <OrbitControls
        target={[0, 0, 0]}
        enableDamping
      />
    </>
  )
}

const DogWithSuspense = () => {
  return (
    <Suspense >
      <Dog />
    </Suspense>
  )
}

export default DogWithSuspense