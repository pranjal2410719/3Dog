import React, { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture, useAnimations } from '@react-three/drei'

const Dog = () => {
  const model = useGLTF('/models/dog.drc.glb')

  const [normalMap, colorMap, branchNormalMap, branchMap] = useTexture([
    '/textures/dog_normal.png',
    '/textures/dog_color.png',
    '/branches_normals.jpg',
    '/branches_diffuse.jpg'
  ])

  const { actions } = useAnimations(model.animations, model.scene)

  useEffect(() => {
    actions?.['Take 001']?.play()
  }, [actions])

  const branchMaterial = new THREE.MeshStandardMaterial({
    normalMap: branchNormalMap,
    map: branchMap,
  })

  // ✅ GLTF texture rules
  normalMap.flipY = false
  colorMap.flipY = false
  colorMap.colorSpace = THREE.SRGBColorSpace

  useThree(({ camera, gl }) => {
    camera.position.set(0, 0.6, 2)

    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.2
    gl.outputColorSpace = THREE.SRGBColorSpace
  })

  const textures = useMemo(() => ({
    normalMap,
    colorMap,
    branchNormalMap,
    branchMap
  }), [normalMap, colorMap, branchNormalMap, branchMap])

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.name.includes('DOG_BODY')) {
          const mat = child.material.clone()
          mat.map = textures.colorMap
          mat.normalMap = textures.normalMap
          mat.roughness = 0.7
          mat.metalness = 0.05
          mat.needsUpdate = true
          child.material = mat
        }
        else if (child.name.includes('branch') || child.name.includes('leaf')) {
          const mat = child.material.clone()
          mat.map = textures.branchMap
          mat.normalMap = textures.branchNormalMap
          mat.roughness = 0.8
          mat.metalness = 0.0
          mat.needsUpdate = true
          child.material = mat
        }
      }
    })
  }, [model, textures])

  return (
    <>
      <primitive
        object={model.scene}
        position={[0, -0.45, 0]}
        rotation={[-0.3, 0.7, 0]}
        scale={1}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={3} />
      <directionalLight position={[-4, -2, -5]} intensity={1} />

      <OrbitControls target={[0, 0.1, 0]} enableDamping />
    </>
  )
}

export default Dog
