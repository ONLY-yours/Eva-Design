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
      <ObjModel
        scale={0.02}
        url="http://127.0.0.1:5500/public/EVA.obj"
        materialUrl="http://127.0.0.1:5500/public/EVA.mtl"
      />
    </Canvas>
  );
};
```

<!-- ### 调整缩放

```tsx
import React from 'react';
import { ObjModel } from 'Eva-Design';
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <Canvas>
      <ObjModel
        scale={0.02}
        url="http://127.0.0.1:5500/public/evaObj.obj"
        materialUrl="http://127.0.0.1:5500/public/EVA.mtl"
      />
    </Canvas>
  );
};
``` -->
