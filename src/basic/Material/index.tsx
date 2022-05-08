import React from 'react';
import { Canvas } from '@react-three/fiber';

type BasicProviderProps = {
  children: any;
  /**
   * @description 是否采用默认点光源配置
   * @type {boolean}
   * @default true
   *  */
  defaultLightSetting: boolean | any;
};

const Material = (props: BasicProviderProps) => {
  return (
    <>
      <material />
    </>
  );
};

const MeshBasicMaterial = () => {
  return (
    <>
      <meshBasicMaterial />
    </>
  );
};

const MeshLambertMaterial = () => {
  return (
    <>
      <meshLambertMaterial />
    </>
  );
};

const MeshStandardMaterial = (props) => {
  return <meshStandardMaterial {...props} />;
};

export { Material, MeshBasicMaterial, MeshLambertMaterial, MeshStandardMaterial };
