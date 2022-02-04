---
nav:
  title: 组件
  path: /components
---

## Sphere （球体）

## 何时使用

- 需要一个球体。
- 球体可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Sphere } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
    </Canvas>
  );
};
```
