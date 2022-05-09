import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import type { MeshProps } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BasicMesh } from '../../basic/Mesh';

type BoxProps = {
  length: number;
  autoRotate: boolean;
  initRotation: string[];
  position: string[];
  scale: number;
  rotateSpeed: [number, number, number];
};

const CustomGltfModel = () => {
  const gltf = useLoader(GLTFLoader, 'http://127.0.0.1:5500/public/Poimandres.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default (props: BoxProps) => {
  return (
    <BasicMesh {...props}>
      <Suspense fallback={null}>
        <CustomGltfModel />
      </Suspense>
    </BasicMesh>
  );
};
