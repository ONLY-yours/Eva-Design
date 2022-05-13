import React, { useRef, useState } from 'react';
import { BasicMeshProps, BasicMesh } from '../../basic/Mesh';

const BasicDodecahedron = (props: BasicMeshProps) => {
  const { length = 3 } = props;

  return <dodecahedronGeometry args={[length]} />;
};

const Dodecahedron = (props: BasicMeshProps) => {
  return (
    <BasicMesh {...props}>
      <BasicDodecahedron {...props} />
    </BasicMesh>
  );
};

export { Dodecahedron };
