import React from 'react';
import { BasicMesh, BasicMeshProps } from '../../basic/Mesh';
import { MeshStandardMaterial } from '../../basic/Material';

type ConeProps = {
  // 圆锥体的高度
  height: number;
};

const BasicCone = (props: BasicMeshProps & ConeProps) => {
  const { length = 3, height, ...rest } = props;

  return <coneGeometry args={[length, height ? height : length]} />;
};

const Cone = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <BasicCone {...props} />
      <MeshStandardMaterial color={'orange'} />
    </BasicMesh>
  );
};

export { Cone };
