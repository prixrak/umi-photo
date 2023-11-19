import { useFrame, useThree } from '@react-three/fiber';
import { easing } from 'maath';
import React, { FC, useEffect, useRef } from 'react';
import { Group } from 'three';
import { getBreakpoints } from '@helpers/helpers';
import { useStore } from '@hooks/useStore';

interface Props {
  children: React.ReactNode;
}

export const CameraRig: FC<Props> = ({ children }) => {
  const group = useRef<Group>(null);
  const store = useStore();
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 100);
  }, [camera.position, store.tabs.intro]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { isMobile, isTablet } = getBreakpoints();

    // set the initial position of the model
    let targetPosition: [number, number, number] = [-0.7, -0.1, 2];
    if (store.tabs.intro) {
      if (isTablet) targetPosition = [0, 0.4, 2];
      if (isMobile) targetPosition = [0, 0.6, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
  });

  return <group ref={group}>{children}</group>;
};
