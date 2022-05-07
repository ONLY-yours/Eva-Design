---
nav:
  title: 组件
  path: /components
---

## Obj 组件

## 何时使用

- 需要加载自定义 Obj 组件 Model

### 基本使用

```tsx
import React from 'react';
import { ObjModel } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ObjModel />
    </Canvas>
  );
};
```