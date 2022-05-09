---
nav:
  title: 组件
  path: /components
---

## 3D 组件通用 Api

大部分通用 3D 组件都有些共性的 Api，例如旋转，缩放，颜色等等。这些基本 Api 在每个组件中都用的到。记住这些 Api 可以在后续使用的时候减少很多翻阅文档的时间。

## 何时使用

- 需要设置某个 3D 组件的 api 时。
- 下列文档都会采用 Box 进行模拟说明这些 Api。
- 需要注意的是有些特殊的 3D 组件并不支持所有通用 Api，对这些例外的情况，我们会在组件开头进行描述。大家需要仔细关注。

### 基本使用

```tsx
import React from 'react';
import { Box, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 开启自动旋转

通过设定 `autoSpin` 为 `true` 来打开自动旋转。

```tsx
import React from 'react';
import { Box, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box autoRotate={true} />
    </BasicProvider>
  );
};
```

### 手动指定立方体的棱长

通过指定 `length` 来自定义立方体的棱长。

```tsx
import React from 'react';
import { Box, BasicProvider, PointLight } from 'Eva-Design';
export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box length={2} initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 设定初始化旋转偏移量

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Box, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[1, 0, 0.5]} />
    </BasicProvider>
  );
};
```

### 设定缩放比例

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Box, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[0, 0, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[2, 2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[-2, 2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[2, -2, 0]} />
      <Box scale={0.5} initRotation={[0, 0, 0]} position={[-2, -2, 0]} />
    </BasicProvider>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 棱线边界长度 or 半径等基线长度 | `number` | 3 |
| autoRotate | 是否需要自动旋转 | `boolean` | false |
| rotateSpeed | 旋转速率（仅当自动旋转打开时生效） | string[xSpeed: number, ySpeed: number , zSpeed: numer] | [ 0.01 , 0.005 , 0.05 ] |
| initRotation | 默认初始化时候立方体的旋转角度 | string[x: number,y: number: z: number] | [0, 0, 0] |
| position | 立方体所处的位置 | string[x: number,y: number: z: number] | [0, 0, 0] |
| scale | 立方体缩放的比例 | number | 1 |
| materialRender | 通用整体 Mesh 的 material 材质导入 | function | - |
