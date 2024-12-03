import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Astronaut } from './Astronaut';
import { Suspense } from 'react';

export const Scene = () => {
  return (
    <Canvas className="h-screen w-full">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Suspense fallback={null}>
        <Astronaut position={[0, 0, 0]} />
        <Astronaut position={[3, 2, -5]} rotation={[0, 1, 0]} />
        <Astronaut position={[-4, -2, -3]} rotation={[0, -0.5, 0]} />
      </Suspense>
    </Canvas>
  );
};