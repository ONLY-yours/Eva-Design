---
nav:
  title: 组件
  path: /components
---

## Cylinder （圆柱体）

## 何时使用

- 需要一个球体。
- 球体可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Cylinder } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cylinder initRotation={[0.5, 0.5, 0]} />
    </Canvas>
  );
};
```
