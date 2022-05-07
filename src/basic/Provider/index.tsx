import React from 'react';
import { Canvas } from '@react-three/fiber';

const BasicProvider = (props: { children: any }) => {
  return (
    <Canvas>
      <>
        {props.children}
        <ambientLight />
      </>
    </Canvas>
  );
};

export { BasicProvider };
