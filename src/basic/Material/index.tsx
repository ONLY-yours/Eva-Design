import React from 'react';

const Material = (props: any) => {
  return (
    <>
      <material {...props} />
    </>
  );
};

const MeshBasicMaterial = (props: any) => {
  return (
    <>
      <meshBasicMaterial {...props} />
    </>
  );
};

const MeshLambertMaterial = (props: any) => {
  return (
    <>
      <meshLambertMaterial {...props} />
    </>
  );
};

const MeshStandardMaterial = (props: any) => {
  return <meshStandardMaterial {...props} />;
};

export { Material, MeshBasicMaterial, MeshLambertMaterial, MeshStandardMaterial };
