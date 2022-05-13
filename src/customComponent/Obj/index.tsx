import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { BaseCustomComponentProps } from '../utils';
import { Environment, OrbitControls } from '@react-three/drei';

type ObjComProps = {
  /**
   * @param {string} url
   * @description 主结构的加载url链接
   */
  url: string;
  /**
   * @param {string} materialUrl
   * @description 部分需要加载material材质的url链接
   */
  materialUrl: string;
} & BaseCustomComponentProps;

const CustomObjModel = (props: ObjComProps) => {
  const { url, materialUrl, scale = 0.04 } = props;

  const materials = useLoader(MTLLoader, materialUrl);

  const obj = useLoader(OBJLoader, url, (loader: any) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <>
      <primitive object={obj} scale={scale} />
    </>
  );
};

const ObjModel = (props: ObjComProps) => {
  return (
    <Suspense fallback={null}>
      <Environment preset="sunset" background />
      <OrbitControls />
      <CustomObjModel {...props} />
    </Suspense>
  );
};

export { ObjModel };
