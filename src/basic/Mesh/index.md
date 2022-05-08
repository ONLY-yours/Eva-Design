---
nav:
  title: 组件
  path: /components
---

## Mesh（网格）

## 何时使用

- 需要加载 3D 模型的时候。
- 需要注意的是，3D 模型一定要加载在 Mesh 中，否则可能会出现无法渲染的情况。
- Eva-Design 提供的所有基本模型都会包裹 Mesh，部分 BasicProvider 的 Api 就是用于控制 Mesh 中的部分参数的，例如 Scale、autoSpin。我们认为用户不需要每次都手动感知是否添加 Mesh，当你不需要的时候，可以通过 Api 来关闭它。

```tsx
import React from 'react';
import { BasicProvider, Box, AmbientLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider defaultLightSetting={false}>
      <AmbientLight position={[0, 0, 0]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

## PointLight 点光源

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```
