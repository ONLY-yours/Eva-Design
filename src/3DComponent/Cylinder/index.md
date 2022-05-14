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
import { Cylinder, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cylinder initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 开启自动旋转

通过设定 `autoSpin` 为 `true` 来打开自动旋转。

```tsx
import React from 'react';
import { Cylinder, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cylinder autoRotate={true} />
    </BasicProvider>
  );
};
```

### 手动指定立方体的棱长

通过指定 `length` 来自定义立方体的棱长。

```tsx
import React from 'react';
import { Cylinder, BasicProvider, PointLight } from 'eva-design-three';
export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cylinder length={2} initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 设定初始化旋转偏移量

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Cylinder, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cylinder initRotation={[1, 0, 0.5]} />
    </BasicProvider>
  );
};
```

### 设定缩放比例

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Cylinder, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[0, 0, 0]} />
      <Cylinder scale={0.5} initRotation={[0, 0, 0]} position={[2, 2, 0]} />
      <Cylinder scale={0.5} initRotation={[0, 0, 0]} position={[-2, 2, 0]} />
      <Cylinder scale={0.5} initRotation={[0, 0, 0]} position={[2, -2, 0]} />
      <Cylinder scale={0.5} initRotation={[0, 0, 0]} position={[-2, -2, 0]} />
    </BasicProvider>
  );
};
```
