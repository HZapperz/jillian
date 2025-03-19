import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Line, Billboard, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './AnimatedBackground.css';

// Large animated background sphere
const AnimatedSphere = () => {
  const sphereRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      // Gentle pulsing effect
      sphereRef.current.scale.x = 1 + Math.sin(t * 0.3) * 0.05;
      sphereRef.current.scale.y = 1 + Math.sin(t * 0.3) * 0.05;
      sphereRef.current.scale.z = 1 + Math.sin(t * 0.3) * 0.05;
      
      // Subtle rotation
      sphereRef.current.rotation.z = t * 0.1;
    }
  });
  
  return (
    <Sphere ref={sphereRef} args={[3, 64, 64]} position={[0, 0, -5]}>
      <meshStandardMaterial
        color="#5EADF2"
        transparent
        opacity={0.2}
        roughness={0.7}
        metalness={0.3}
        wireframe={true}
      />
    </Sphere>
  );
};

// Designer UI elements - grid lines
const GridLines = () => {
  const lineCount = 10;
  const lineSpacing = 2;
  const gridRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
      gridRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });
  
  return (
    <group ref={gridRef}>
      {/* Horizontal lines */}
      {Array.from({ length: lineCount }).map((_, i) => {
        const y = (i - lineCount / 2) * lineSpacing;
        return (
          <Line
            key={`h-${i}`}
            points={[[-15, y, 0], [15, y, 0]]}
            color="#5EADF2"
            lineWidth={1}
            opacity={0.5}
            transparent
          />
        );
      })}
      
      {/* Vertical lines */}
      {Array.from({ length: lineCount }).map((_, i) => {
        const x = (i - lineCount / 2) * lineSpacing;
        return (
          <Line
            key={`v-${i}`}
            points={[[x, -15, 0], [x, 15, 0]]}
            color="#F686BD"
            lineWidth={1}
            opacity={0.5}
            transparent
          />
        );
      })}
    </group>
  );
};

// Floating design elements
const DesignElements = () => {
  const elements = useMemo(() => [
    { type: 'box', position: [-4, 3, -2], size: [1, 1, 1], color: '#F686BD', speed: 0.5 },
    { type: 'sphere', position: [4, -2, -1], radius: 0.7, color: '#5EADF2', speed: 0.6 },
    { type: 'box', position: [-5, -3, -3], size: [1.5, 0.2, 1.5], color: '#A9E1C3', speed: 0.4 },
    { type: 'box', position: [5, 2, -2], size: [0.2, 2, 0.2], color: '#F686BD', speed: 0.7 },
    { type: 'sphere', position: [0, 4, -2], radius: 0.5, color: '#5EADF2', speed: 0.5 },
    { type: 'box', position: [3, -4, -1], size: [2, 0.2, 0.2], color: '#A9E1C3', speed: 0.3 },
  ], []);
  
  return (
    <>
      {elements.map((elem, i) => (
        <Float 
          key={i}
          speed={elem.speed} 
          rotationIntensity={0.5} 
          floatIntensity={2}
        >
          {elem.type === 'box' ? (
            <mesh position={elem.position}>
              <boxGeometry args={elem.size} />
              <meshStandardMaterial 
                color={elem.color} 
                transparent
                opacity={0.7}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
          ) : (
            <mesh position={elem.position}>
              <sphereGeometry args={[elem.radius, 16, 16]} />
              <meshStandardMaterial 
                color={elem.color} 
                transparent
                opacity={0.7}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
          )}
        </Float>
      ))}
    </>
  );
};

// Animated wireframe circles
const WireframeCircles = () => {
  const group = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.z = t * 0.1;
    }
  });
  
  return (
    <group ref={group}>
      {[1, 2, 3, 4, 5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius * 1.5, radius * 1.5 + 0.05, 64]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#5EADF2' : '#F686BD'} 
            wireframe 
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

// Floating UI terms
const UiTerms = () => {
  const terms = [
    { text: 'UI', position: [-5, 0, -5], color: '#5EADF2' },
    { text: 'UX', position: [5, 0, -5], color: '#F686BD' },
    { text: 'Design', position: [0, 4, -5], color: '#A9E1C3' },
    { text: 'Create', position: [0, -4, -5], color: '#F686BD' },
  ];
  
  return (
    <>
      {terms.map((term, i) => (
        <Billboard key={i} position={term.position} follow={true}>
          <Text
            color={term.color}
            fontSize={0.8}
            font="/fonts/Montserrat-Bold.ttf"
            anchorX="center"
            anchorY="middle"
          >
            {term.text}
          </Text>
        </Billboard>
      ))}
    </>
  );
};

// Main scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <AnimatedSphere />
      <WireframeCircles />
      <GridLines />
      <DesignElements />
      <UiTerms />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground; 