import React from 'react';

const AmbientLight = (props: any) => {
  return <ambientLight {...props} />;
};

const PointLight = (props: any) => {
  return <pointLight {...props} />;
};

export { AmbientLight, PointLight };
