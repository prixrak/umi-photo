import React, { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Backdrop } from '@components/Backdrop';
import { CameraRig } from '@components/CameraRig';
import { useStore } from '@hooks/useStore';

interface Props {
  children: React.ReactNode;
}

export const CanvasForModel: FC<Props> = ({ children }) => {
  const store = useStore();

  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      {store.tabs.intro ? (
        <>
          <Backdrop />
          <CameraRig>
            <Center>{children}</Center>
          </CameraRig>
        </>
      ) : (
        <>
          <OrbitControls />
          <Center>{children}</Center>
        </>
      )}
    </Canvas>
  );
};
