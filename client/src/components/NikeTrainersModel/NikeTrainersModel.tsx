import React, { FC } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial } from 'three';
import NikeTrainersGlbUrl from '@assets/glb/nike_trainers.glb?url';
import TextureUrl from '@assets/nike_trainers.jpeg';
import { useStore } from '@hooks/useStore';
import { TextureLoader } from 'three';

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(TextureUrl);

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

type GLTFResult = GLTF & {
  nodes: {
    Nike_trainers: Mesh;
  };
  materials: {
    Material: MeshStandardMaterial;
  };
};

const loaded_texture = createMaterial();

interface Props {}

export const NikeTrainersModel: FC<Props> = () => {
  const store = useStore();
  const { nodes } = useGLTF(NikeTrainersGlbUrl) as GLTFResult;
  const myMesh = React.useRef<Mesh>(null);

  const stateString = JSON.stringify(store);

  return (
    <group key={stateString}>
      <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.Nike_trainers.geometry}
        material={loaded_texture}
        material-roughness={1}
        dispose={null}
      >
        <meshStandardMaterial color={store.controllers.color} />

        {/* <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture as Texture} /> */}
      </mesh>
    </group>
  );
};
