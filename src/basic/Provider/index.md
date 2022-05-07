---
nav:
  title: 组件
  path: /components
---

## BasicProvider

## 何时使用

BasicProvider 基本内容提供組件。你可以通过设置 BasicProvider 来修改部分我们认为的设置模式，包括但不限于以下几个部分：

- Light（光源）
- scale
- Canvas

> 注意：如果你觉得默认模式 + Api 修改仍然不能满足你的需求，你可以通过 Api 来关闭我们提供的内容，自己编写 Canvas、Light 等内容。

### 基本使用

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
