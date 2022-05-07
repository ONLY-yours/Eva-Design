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

const Material = () => {
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

export { Material, MeshBasicMaterial, MeshLambertMaterial };
