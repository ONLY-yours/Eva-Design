---
nav:
  title: 组件
  path: /components
---

## Light

## 何时使用

- 需要加载自定义 Gltf 组件 Model

### 基本使用

```tsx
import React from 'react';
import { GltfModel } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <GltfModel />
    </Canvas>
  );
};
```
