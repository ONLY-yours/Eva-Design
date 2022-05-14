---
nav:
  title: 组件
  path: /components
---

## Circle （圆形）

## 何时使用

- 需要一个圆形。
- 圆形也可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Circle, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Circle />
    </BasicProvider>
  );
};
```
