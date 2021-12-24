---
nav:
  title: Components
  path: /components
---

## Box （立方体盒模型）

## 何时使用

- 需要一个立方体时。
- 立方体可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Box } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </Canvas>
  );
};
```

### 开启自动旋转

通过设定 `autoSpin` 为 `true` 来打开自动旋转。

```tsx
import React from 'react';
import { Box } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box autoRotate={true} />
    </Canvas>
  );
};
```

### 手动指定立方体的棱长

通过指定 `length` 来自定义立方体的棱长。

```tsx
import React from 'react';
import { Box } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box length={2} initRotation={[0.5, 0.5, 0]} />
    </Canvas>
  );
};
```

### 设定初始化旋转偏移量

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Box } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box initRotation={[1, 0, 0.5]} />
    </Canvas>
  );
};
```

### 设定缩放比例

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Box } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[2, 2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[-2, 2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[2, -2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[-2, -2, 0]} />
    </Canvas>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 棱线边界长度 | `number` | 3 |
| autoRotate | 是否需要自动旋转 | `boolean` | false |
| rotateSpeed | 旋转速率（仅当自动旋转打开时生效） | string[xSpeed: number, ySpeed: number , zSpeed: numer] | [ 0.01 , 0.005 , 0.05 ] |
| initRotation | 默认初始化时候立方体的旋转角度 | string[x: number,y: number: z: number] | [0, 0, 0] |
| position | 立方体所处的位置 | string[x: number,y: number: z: number] | [0, 0, 0] |
| scale | 立方体缩放的比例 | number | 1 |
