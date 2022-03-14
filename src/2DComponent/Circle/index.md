---
nav:
  title: 组件
  path: /components
---

## Circle （圆形）

## 何时使用

- 需要一个圆形。
- 圆形也可以旋转，自定义变换位置。
- 圆形也可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Circle } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Circle />
    </Canvas>
  );
};
```
