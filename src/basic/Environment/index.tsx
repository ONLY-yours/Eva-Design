import { Environment } from '@react-three/drei';
import React from 'react';

type BasicEnvironmentProps = {
  enviromentScreen:
    | 'sunset'
    | 'dawn'
    | 'night'
    | 'warehouse'
    | 'forest'
    | 'apartment'
    | 'studio'
    | 'city'
    | 'park'
    | 'lobby'
    | undefined;
  isbackground: boolean | undefined;
};

const BasicEnvironment = (props: BasicEnvironmentProps) => {
  const { enviromentScreen = 'sunset', isbackground = true } = props;
  return (
    <>
      <Environment preset={enviromentScreen} background={isbackground} {...props} />
    </>
  );
};

export { BasicEnvironment };
