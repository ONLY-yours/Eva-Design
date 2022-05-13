import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

type BasicProviderProps = {
  children: any;
  /**
   * @description 是否采用默认点光源配置
   * @type {boolean}
   * @default true
   *  */
  defaultLightSetting: boolean | any;
  /**
   * @description 是否采需要框架帮助添加背景内容
   * @default false
   *  */
  EnvironmentSetting: boolean | any;
  /**
   * @description 是否可以随意移动镜头、伸缩
   * @default false
   *  */
  OrbControlsSetting: boolean | any;
};

const BasicProvider = (props: BasicProviderProps) => {
  const {
    defaultLightSetting = true,
    EnvironmentSetting = false,
    OrbControlsSetting = false,
  } = props || {};
  return (
    <Canvas>
      <Suspense fallback={null}>
        <>
          {EnvironmentSetting && <Environment preset="sunset" background />}
          {OrbControlsSetting && <OrbitControls />}
          {props.children.map((item: any) => {
            // if (item.type.name === 'Sphere') {
            //   return item;
            // }
            return item;
          })}
          {defaultLightSetting && <ambientLight {...defaultLightSetting} />}
          <meshStandardMaterial color={'orange'} />
        </>
      </Suspense>
    </Canvas>
  );
};

export { BasicProvider };
