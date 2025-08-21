import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder, Cone, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedMeshProps {
  geometry: string;
  color: string;
  position?: [number, number, number];
  scale?: number;
}

const AnimatedMesh = ({ geometry, color, position = [0, 0, 0], scale = 1 }: AnimatedMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  const renderGeometry = () => {
    const props = {
      ref: meshRef,
      position,
      scale: [scale, scale, scale] as [number, number, number]
    };

    switch (geometry) {
      case 'box':
        return (
          <Box {...props}>
            <meshPhongMaterial color={color} />
          </Box>
        );
      case 'sphere':
        return (
          <Sphere {...props}>
            <meshPhongMaterial color={color} />
          </Sphere>
        );
      case 'cylinder':
        return (
          <Cylinder {...props}>
            <meshPhongMaterial color={color} />
          </Cylinder>
        );
      case 'cone':
        return (
          <Cone {...props}>
            <meshPhongMaterial color={color} />
          </Cone>
        );
      case 'torus':
        return (
          <Torus {...props} args={[0.8, 0.3, 16, 100]}>
            <meshPhongMaterial color={color} />
          </Torus>
        );
      case 'octahedron':
        return (
          <mesh {...props}>
            <octahedronGeometry args={[1]} />
            <meshPhongMaterial color={color} />
          </mesh>
        );
      case 'dodecahedron':
        return (
          <mesh {...props}>
            <dodecahedronGeometry args={[1]} />
            <meshPhongMaterial color={color} />
          </mesh>
        );
      case 'tetrahedron':
        return (
          <mesh {...props}>
            <tetrahedronGeometry args={[1]} />
            <meshPhongMaterial color={color} />
          </mesh>
        );
      default:
        return (
          <Box {...props}>
            <meshPhongMaterial color={color} />
          </Box>
        );
    }
  };

  return <>{renderGeometry()}</>;
};

interface ThreeDIconProps {
  type: 'code' | 'target' | 'award' | 'folder' | 'building' | 'graduation' | 'trophy' | 'trending';
  size?: number;
  color?: string;
}

const ThreeDIcon = ({ type, size = 32, color = '#8B5CF6' }: ThreeDIconProps) => {
  const getIconGeometry = () => {
    switch (type) {
      case 'code':
        return { geometry: 'box', color: '#3B82F6' };
      case 'target':
        return { geometry: 'sphere', color: '#EF4444' };
      case 'award':
        return { geometry: 'octahedron', color: '#F59E0B' };
      case 'folder':
        return { geometry: 'box', color: '#10B981' };
      case 'building':
        return { geometry: 'cylinder', color: '#6366F1' };
      case 'graduation':
        return { geometry: 'cone', color: '#8B5CF6' };
      case 'trophy':
        return { geometry: 'dodecahedron', color: '#F59E0B' };
      case 'trending':
        return { geometry: 'tetrahedron', color: '#06B6D4' };
      default:
        return { geometry: 'box', color };
    }
  };

  const iconConfig = getIconGeometry();

  return (
    <div style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[2, 2, 2]} 
          intensity={0.8}
          castShadow
        />
        <pointLight 
          position={[-2, -2, -2]} 
          intensity={0.4}
          color="#8B5CF6"
        />
        <AnimatedMesh
          geometry={iconConfig.geometry}
          color={iconConfig.color}
          scale={0.8}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDIcon;