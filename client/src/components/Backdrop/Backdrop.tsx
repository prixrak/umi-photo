import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

export const Backdrop = () => {
  return (
    <AccumulativeShadows temporal frames={60} alphaTest={0.85} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
      <RandomizedLight amount={4} radius={9} intensity={0.65} ambient={0.25} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={5} intensity={0.45} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  );
};
