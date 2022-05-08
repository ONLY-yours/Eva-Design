import React from 'react';
import { BasicMesh, BasicMeshProps } from '../../basic/Mesh';
import { MeshStandardMaterial } from '../../basic/Material';

const BasicBox = (props: BasicMeshProps) => {
  const { length = 3, ...rest } = props;

  return <boxGeometry args={[length, length, length]} />;
};

const Box = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <BasicBox {...props} />
      <MeshStandardMaterial color={'orange'} />
    </BasicMesh>
  );
};

export { Box };
