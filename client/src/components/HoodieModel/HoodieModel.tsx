import React, { FC } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial, Texture } from 'three';
import HoodieGlbUrl from '@assets/glb/hoodie.glb?url';
import LogoUrl from '@assets/logo.png?url';
import { useStore } from '@hooks/useStore';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: Mesh
    Object_5: Mesh
    Object_6: Mesh
  };
  materials: {
    Material: MeshStandardMaterial;
  };
};

interface Props {}

export const HoodieModel: FC<Props> = () => {
  const store = useStore();
  const { nodes, materials } = useGLTF(HoodieGlbUrl) as GLTFResult;
  const logoTexture = useTexture(LogoUrl);
  const myMesh = React.useRef<Mesh>(null);

  // const fullTexture = useTexture(LogoUrl);

  useFrame(({ clock }, delta) => {
    easing.dampC(materials.Material.color, 'black', 0.25, delta);
  });

  const stateString = JSON.stringify(store);

  return (
    <group key={stateString}>
      <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >

      </mesh>

      <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >

      <Decal
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={logoTexture as Texture}
          polygonOffsetFactor={16}
          depthTest={false}
        />
      </mesh>

       <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
    </group>
    
  );
};
