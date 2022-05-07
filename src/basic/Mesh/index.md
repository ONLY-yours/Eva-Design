---
nav:
  title: 组件
  path: /components
---

## Mesh（网格）

## 何时使用

- 当你需要加载光源的时候可以添加使用。

## AmbientLight 环境光

> tips： 我们会在组件中默认加入环境光，因此如果需要完全自定义，请在 BasicProvider 中先关闭默认环境光，不然光照效果可能会被叠加从而不是你需要的模式。

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
