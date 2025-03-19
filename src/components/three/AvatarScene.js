import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './AvatarScene.css';

// Animated avatar component
const Avatar = () => {
  const group = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 2) * 0.5,
      0.05
    );
  });

  return (
    <group ref={group}>
      {/* Head */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#F8D0C3" 
          roughness={0.6} 
          metalness={0.1} 
        />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.15, 16, 16]} position={[-0.3, 0.2, 0.8]}>
        <meshStandardMaterial color="#333333" />
      </Sphere>
      <Sphere args={[0.15, 16, 16]} position={[0.3, 0.2, 0.8]}>
        <meshStandardMaterial color="#333333" />
      </Sphere>
      
      {/* Hair */}
      <Sphere args={[1.2, 32, 32]} position={[0, 0.2, -0.2]}>
        <MeshDistortMaterial
          color="#5D4037"
          speed={2}
          distort={0.3}
          radius={1}
        />
      </Sphere>
      
      {/* Shoulders */}
      <Sphere args={[0.8, 32, 32]} position={[-0.8, -1.5, 0]}>
        <meshStandardMaterial color="#BBBBBB" />
      </Sphere>
      <Sphere args={[0.8, 32, 32]} position={[0.8, -1.5, 0]}>
        <meshStandardMaterial color="#BBBBBB" />
      </Sphere>
    </group>
  );
};

const AvatarScene = () => {
  return (
    <div className="avatar-scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#f5f5f5']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        
        <Avatar />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
};

export default AvatarScene; 