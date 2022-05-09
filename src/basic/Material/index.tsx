import React from 'react';

const Material = (props) => {
  return (
    <>
      <material {...props} />
    </>
  );
};

const MeshBasicMaterial = (props) => {
  return (
    <>
      <meshBasicMaterial {...props} />
    </>
  );
};

const MeshLambertMaterial = (props) => {
  return (
    <>
      <meshLambertMaterial {...props} />
    </>
  );
};

const MeshStandardMaterial = (props) => {
  return <meshStandardMaterial {...props} />;
};

export { Material, MeshBasicMaterial, MeshLambertMaterial, MeshStandardMaterial };
