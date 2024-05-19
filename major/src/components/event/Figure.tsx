'use client'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

interface MeshNode {
    geometry: any;
    material: any;
    skeleton: any;
    // Add any other properties you expect on the mesh node
}

interface Nodes {
    [nodeName: string]: MeshNode;
    // Define other nodes if necessary
}
export function Figure(props : any) {
    
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/hilda_sygna_10.glb')
  const { actions } = useAnimations(animations, group.current)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Hilda_Sygna_10fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature558" scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_166"
                      geometry={nodes.Object_166.geometry}
                      material={materials['M_ch0004_10_toko_mouth.002']}
                      skeleton={nodes.Object_166.skeleton}
                    />
                    <skinnedMesh
                      name="Object_168"
                      geometry={nodes.Object_168.geometry}
                      material={materials['M_ch0004_10_toko_mouth.001']}
                      skeleton={nodes.Object_168.skeleton}
                    />
                    <skinnedMesh
                      name="Object_170"
                      geometry={nodes.Object_170.geometry}
                      material={materials['M_ch0004_10_toko_body.004']}
                      skeleton={nodes.Object_170.skeleton}
                    />
                    <skinnedMesh
                      name="Object_172"
                      geometry={nodes.Object_172.geometry}
                      material={materials['M_ch0004_10_toko_body.005']}
                      skeleton={nodes.Object_172.skeleton}
                    />
                    <skinnedMesh
                      name="Object_174"
                      geometry={nodes.Object_174.geometry}
                      material={materials['M_ch0004_10_toko_body.002']}
                      skeleton={nodes.Object_174.skeleton}
                    />
                    <skinnedMesh
                      name="Object_176"
                      geometry={nodes.Object_176.geometry}
                      material={materials['M_ch0004_10_toko_body.003']}
                      skeleton={nodes.Object_176.skeleton}
                    />
                    <skinnedMesh
                      name="Object_178"
                      geometry={nodes.Object_178.geometry}
                      material={materials['M_ch0004_10_toko_hair.001']}
                      skeleton={nodes.Object_178.skeleton}
                    />
                    <skinnedMesh
                      name="Object_180"
                      geometry={nodes.Object_180.geometry}
                      material={materials['M_ch0004_10_toko_skin.002']}
                      skeleton={nodes.Object_180.skeleton}
                    />
                    <skinnedMesh
                      name="Object_182"
                      geometry={nodes.Object_182.geometry}
                      material={materials['M_ch0004_10_toko_face.001']}
                      skeleton={nodes.Object_182.skeleton}
                    />
                    <skinnedMesh
                      name="Object_184"
                      geometry={nodes.Object_184.geometry}
                      material={materials['M_ch0004_10_toko_body.001']}
                      skeleton={nodes.Object_184.skeleton}
                    />
                    <skinnedMesh
                      name="Object_186"
                      geometry={nodes.Object_186.geometry}
                      material={materials['M_ch0004_10_toko_skin.001']}
                      skeleton={nodes.Object_186.skeleton}
                    />
                    <group name="Object_165" scale={100} />
                    <group name="Object_167" scale={100} />
                    <group name="Object_169" scale={100} />
                    <group name="Object_171" scale={100} />
                    <group name="Object_173" scale={100} />
                    <group name="Object_175" scale={100} />
                    <group name="Object_177" scale={100} />
                    <group name="Object_179" scale={100} />
                    <group name="Object_181" scale={100} />
                    <group name="Object_183" scale={100} />
                    <group name="Object_185" scale={100} />
                  </group>
                </group>
                <group name="G_tooth232" scale={100} />
                <group name="G_mouth239" scale={100} />
                <group name="G_skirt006" scale={100} />
                <group name="G_skirt_ura004" scale={100} />
                <group name="G_decoration001" scale={100} />
                <group name="G_hair239" scale={100} />
                <group name="G_hair240" scale={100} />
                <group name="G_head458" scale={100} />
                <group name="G_head459" scale={100} />
                <group name="G_body333" scale={100} />
                <group name="G_body334" scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hilda_sygna_10.glb')
