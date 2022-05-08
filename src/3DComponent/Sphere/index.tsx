import React, { useRef, useState } from 'react';
import { BasicMeshProps, BasicMesh } from '../../basic/Mesh';

const BasicSphere = (props: BasicMeshProps) => {
  const { length = 3 } = props;

  return <sphereGeometry args={[length]} />;
};

const Sphere = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <BasicSphere {...props} />
    </BasicMesh>
  );
};

export { Sphere };
