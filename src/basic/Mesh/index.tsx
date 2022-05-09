import { MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { MeshStandardMaterial } from '../Material';

export type BasicMeshProps = {
  length: number;
  autoRotate: boolean;
  initRotation: string[];
  position: string[];
  scale: number;
  rotateSpeed: [number, number, number];
  materialRender: Function;
  meshSetting: boolean | any;
};

const BasicMesh = (props: BasicMeshProps & MeshProps & any) => {
  const {
    autoRotate = false,
    length = 3,
    scale = 1,
    initRotation = [0, 0, 0],
    position = [0, 0, 0],
    rotateSpeed = [0.01, 0.005, 0.005],
    materialRender,
    meshSetting = true,
    ...rest
  } = props;

  const [xRotateSpeed, yRotateSpeed, zRotateSpeed] = rotateSpeed;

  const ref = useRef<MeshProps>();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.x += xRotateSpeed;
      ref.current.rotation.y += yRotateSpeed;
      ref.current.rotation.z += zRotateSpeed;
    }
  });

  return meshSetting ? (
    <mesh
      ref={ref}
      position={position}
      rotation={initRotation}
      scale={[scale, scale, scale]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      {...rest}
    >
      {props.children}
      {materialRender ? (
        materialRender
      ) : (
        <MeshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      )}
    </mesh>
  ) : (
    <>
      {props.children}
      {materialRender ? (
        materialRender
      ) : (
        <MeshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      )}
    </>
  );
};

export { BasicMesh };
