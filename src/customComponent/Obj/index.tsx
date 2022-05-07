import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const CustomObjModel = () => {
  const gltf = useLoader(GLTFLoader, 'http://127.0.0.1:5500/public/Poimandres.gltf');
  const materials = useLoader(MTLLoader, 'http://127.0.0.1:5500/public/Blank.mtl');

  const obj = useLoader(OBJLoader, 'http://127.0.0.1:5500/public/rabbit.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <>
      <primitive object={obj} scale={0.4} />
    </>
  );
};

export default () => {
  return (
    <Suspense fallback={null}>
      <CustomObjModel />
    </Suspense>
  );
};
