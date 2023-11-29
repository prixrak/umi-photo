import React, { FC } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial, Texture } from 'three';
import ShirtGlbUrl from '@assets/glb/shirt.glb?url';
import LogoUrl from '@assets/logo.png?url';
import { useStore } from '@hooks/useStore';

type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: Mesh;
  };
  materials: {
    lambert1: MeshStandardMaterial;
  };
};

interface Props {}

export const ShirtModel: FC<Props> = () => {
  const store = useStore();
  const { nodes, materials } = useGLTF(ShirtGlbUrl) as GLTFResult;
  const logoTexture = useTexture(store.controllers.imgFromUpload ?? LogoUrl);
  const myMesh = React.useRef<Mesh>(null);

  const stateString = JSON.stringify(store);

  return (
    <group key={stateString}>
      <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        <meshStandardMaterial color={store.controllers.color} />

        <Decal
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={logoTexture as Texture}
          polygonOffsetFactor={16}
          depthTest={false}
        />
      </mesh>
    </group>
  );
};
