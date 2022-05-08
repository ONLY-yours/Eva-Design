import React, { useRef, useState } from 'react';
import { BasicMesh, BasicMeshProps } from '../../basic/Mesh';

const BasicCylinder = (props: BasicMeshProps) => {
  const { length = 2 } = props;

  return <cylinderGeometry args={[length, length, length]} />;
};

const Cylinder = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <BasicCylinder {...props} />
    </BasicMesh>
  );
};

export { Cylinder };
