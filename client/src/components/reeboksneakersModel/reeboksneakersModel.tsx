import React, { FC } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { GLTF } from 'three-stdlib';
import { Mesh, MeshStandardMaterial, Texture } from 'three';
import ReebokSneakersGlbUrl from '@assets/glb/reebok_sneakers.glb?url';
import TextureUrl from '@assets/reebok_sneakers.jpg';
import { useStore } from '@hooks/useStore';
import { TextureLoader } from 'three';
import { Tabs } from '@enums/Tabs';


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
    ReebokSneakers: Mesh;
  };
  materials: {
    Material: MeshStandardMaterial;
  };
};


let loaded_texture = createMaterial();

interface Props {}

export const ReebokSneakersModel: FC<Props> = () => {
  const store = useStore();
  const { nodes, materials } = useGLTF(ReebokSneakersGlbUrl) as GLTFResult;

  const myMesh = React.useRef<Mesh>(null);

  // const fullTexture = useTexture(LogoUrl);


  useFrame(({ clock }, delta) => {
    if (myMesh.current) {
      if (store.tabs === Tabs.intro) {
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
        geometry={nodes.ReebokSneakers.geometry}
        material={loaded_texture}
        material-roughness={1}
        dispose={null}
      >
        {/* <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture as Texture} /> */}
      </mesh>
    </group>
  );
};
