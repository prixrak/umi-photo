import React, { FC } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial } from 'three';
import NewBalance574GlbUrl from '@assets/glb/new_balance_574.glb?url';
import TextureUrl from '@assets/new_balance_574.jpeg';
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
    NewBalance574: Mesh;
  };
  materials: {
    Material: MeshStandardMaterial;
  };
};

const loaded_texture = createMaterial();

interface Props {}

export const NewBalance574Model: FC<Props> = () => {
  const store = useStore();
  const { nodes } = useGLTF(NewBalance574GlbUrl) as GLTFResult;

  const myMesh = React.useRef<Mesh>(null);

  const stateString = JSON.stringify(store);

  return (
    <group key={stateString}>
      <mesh
        ref={myMesh}
        castShadow
        geometry={nodes.NewBalance574.geometry}
        material={loaded_texture}
        material-roughness={1}
        dispose={null}
      >
        {/* <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture as Texture} /> */}
      </mesh>
    </group>
  );
};
