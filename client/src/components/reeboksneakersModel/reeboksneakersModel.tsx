import React, { FC } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial, Texture } from 'three';
import NewBalance574GlbUrl from '@assets/glb/new_balance_574.glb?url';
import TextureUrl from '@assets/new_balance_574.jpeg';
import { useStore } from '@hooks/useStore';
import { TextureLoader } from 'three';


function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    TextureUrl,
  );

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


let loaded_texture = createMaterial();

interface Props {}

export const NewBalance574Model: FC<Props> = () => {
  const store = useStore();
  const { nodes, materials } = useGLTF(NewBalance574GlbUrl) as GLTFResult;

  const myMesh = React.useRef<Mesh>(null);

  // const fullTexture = useTexture(LogoUrl);

  useFrame(({ clock }, delta) => {
    if (myMesh.current) {
      if (store.tabs.intro) {
        myMesh.current.rotation.y = Math.sin(clock.getElapsedTime()) / 4;
      } else {
        myMesh.current.rotation.y = -0.35;
      }
    }

    easing.dampC(materials.Material.color, 'black', 0.25, delta);
  });

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
