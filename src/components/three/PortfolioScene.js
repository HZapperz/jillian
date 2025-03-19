import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './PortfolioScene.css';

// A 3D card component with texture
const ProjectCard = ({ position, rotation, color, onClick, active, title, scale = 1 }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Pulse effect for active cards
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Gentle animation for hover state
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered || active ? scale * 1.1 : scale,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered || active ? scale * 1.1 : scale,
      0.1
    );
    
    // Add a subtle floating animation for active cards
    if (active) {
      mesh.current.position.y = position[1] + Math.sin(time * 1.5) * 0.1;
    } else {
      mesh.current.position.y = position[1];
    }
  });
  
  // Card glow effect
  const glowIntensity = active ? 0.5 : hovered ? 0.3 : 0;
  
  return (
    <group>
      {/* Glow effect */}
      {(hovered || active) && (
        <mesh position={[position[0], position[1], position[2] - 0.05]} scale={[2.2, 3.2, 0.1]}>
          <boxGeometry />
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={glowIntensity * 0.5}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
      
      {/* Main card */}
      <mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 3, 0.2]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3}
          metalness={0.5}
          emissive={hovered || active ? color : "black"}
          emissiveIntensity={glowIntensity}
        />
        
        {/* Title text on the card */}
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
        >
          {title}
        </Text>
      </mesh>
    </group>
  );
};

// Small floating particles
const Particles = ({ count = 30, color }) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5,
      ],
      size: 0.02 + Math.random() * 0.08,
      speed: 0.2 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <group>
      {particles.map((props, i) => (
        <FloatingParticle key={i} color={color} {...props} />
      ))}
    </group>
  );
};

const FloatingParticle = ({ position, size, speed, color }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed) * 2;
    ref.current.position.x = position[0] + Math.cos(t * speed * 0.5) * 1;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// The floating cards scene
const FloatingCards = ({ projects, onSelectProject, selectedIndex }) => {
  const positions = [
    [-3.5, 0, 0],
    [0, 0, 1],
    [3.5, 0, 0],
  ];
  
  const rotations = [
    [0, -Math.PI / 8, 0],
    [0, 0, 0],
    [0, Math.PI / 8, 0],
  ];
  
  // Project colors for cards and particles
  const projectColors = [
    "#5EADF2", // Primary
    "#F686BD", // Secondary
    "#A9E1C3", // Accent
  ];
  
  return (
    <>
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, 0, 0]}>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                position={positions[i]}
                rotation={rotations[i]}
                color={projectColors[i]}
                title={project.title}
                onClick={() => onSelectProject(i)}
                active={selectedIndex === i}
                scale={selectedIndex === i ? 1.1 : 1}
              />
            ))}
          </group>
        </Float>
      </PresentationControls>
      
      {/* Background particles */}
      <Particles count={20} color={projectColors[0]} />
      <Particles count={15} color={projectColors[1]} />
      <Particles count={15} color={projectColors[2]} />
    </>
  );
};

// Main portfolio scene component
const PortfolioScene = ({ onSelectProject, selectedIndex }) => {
  // Import project data
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Dynamic import to avoid circular dependencies
    import('../../data/projects').then(module => {
      setProjects(module.default);
    });
  }, []);
  
  return (
    <div className="portfolio-scene">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#f5f5f5']} />
        <fog attach="fog" args={['#f5f5f5', 8, 25]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {projects.length > 0 && (
          <FloatingCards 
            projects={projects}
            onSelectProject={onSelectProject}
            selectedIndex={selectedIndex}
          />
        )}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default PortfolioScene; 