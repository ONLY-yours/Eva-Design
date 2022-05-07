import React, { Children } from 'react';
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

const BasicProvider = (props: BasicProviderProps) => {
  const { defaultLightSetting = true } = props || {};
  return (
    <Canvas>
      <>
        {props.children.map((item) => {
          if (item.type.name === 'Sphere') {
            console.log('setProps');
            return item;
          }
          return item;
        })}
        {defaultLightSetting && <ambientLight {...defaultLightSetting} />}
        <meshStandardMaterial color={'orange'} />
      </>
    </Canvas>
  );
};

export { BasicProvider };
