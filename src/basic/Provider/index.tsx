import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BasicEnvironment } from '../Environment';

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
  /**
   * @description 额外的渲染内容
   * @default null
   *  */
  externalRender: React.ReactNode;
};

const BasicProvider = (props: BasicProviderProps) => {
  const {
    defaultLightSetting = true,
    EnvironmentSetting = false,
    OrbControlsSetting = false,
    externalRender,
  } = props || {};

  const { environmentRender, ...rest } = EnvironmentSetting;
  const { OrbControlsRender } = OrbControlsSetting;

  console.log('environmentRender', environmentRender);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <>
          {EnvironmentSetting ? (
            environmentRender ? (
              <>{environmentRender}</>
            ) : (
              <BasicEnvironment enviromentScreen="city" isbackground={true} {...rest} />
            )
          ) : (
            <></>
          )}
          {OrbControlsSetting ? (
            OrbControlsRender ? (
              <>{OrbControlsRender}</>
            ) : (
              <OrbitControls />
            )
          ) : (
            <></>
          )}
          {/* {props.children.map((item: any) => {
            // if (item.type.name === 'Sphere') {
            //   return item;
            // }
            return item;
          })} */}
          {props.children}
          {defaultLightSetting && <ambientLight {...defaultLightSetting} />}
          <meshStandardMaterial color={'orange'} />
          {externalRender}
        </>
      </Suspense>
    </Canvas>
  );
};

export { BasicProvider };
