import React from 'react';
import { BasicMesh, BasicMeshProps } from '../../basic/Mesh';
import { MeshStandardMaterial } from '../../basic/Material';

const Circle = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <circleBufferGeometry args={[3, 1000]} />
      <MeshStandardMaterial color={'orange'} />
    </BasicMesh>
  );
};

export { Circle };
