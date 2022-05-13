import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import type { MeshProps } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BasicMesh, BasicMeshProps } from '../../basic/Mesh';

const CustomGltfModel = () => {
  const gltf = useLoader(GLTFLoader, 'http://127.0.0.1:5500/public/Poimandres.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

const GltfModel = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <Suspense fallback={null}>
        <CustomGltfModel />
      </Suspense>
    </BasicMesh>
  );
};

export { GltfModel };
