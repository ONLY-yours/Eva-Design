---
nav:
  title: 组件
  path: /components
---

## Sphere （球体）

## 何时使用

- 需要一个球体。
- 球体可以旋转，自定义变换位置。

> 注意：球体部分 Api 需要特殊情况下才能看得出，例如 autoSpin 自动旋转、initRotation 旋转偏移量，这两个参数在完整球体的情况下不太好观察。但是 Api 是支持的，需要根据情况适时使用。

### 基本使用

```tsx
import React from 'react';
import { Sphere, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Sphere />
    </BasicProvider>
  );
};
```

### 手动指定球体半径

通过指定 `length` 来自定义立方体的棱长。

```tsx
import React from 'react';
import { Sphere, BasicProvider, PointLight } from 'eva-design-three';
export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Sphere length={2} initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 设定初始化旋转偏移量

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Sphere, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Sphere initRotation={[1, 0, 0.5]} />
    </BasicProvider>
  );
};
```

### 设定缩放比例

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Sphere, BasicProvider, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[0, 0, 0]} />
      <Sphere scale={0.5} initRotation={[0, 0, 0]} position={[2, 2, 0]} />
      <Sphere scale={0.5} initRotation={[0, 0, 0]} position={[-2, 2, 0]} />
      <Sphere scale={0.5} initRotation={[0, 0, 0]} position={[2, -2, 0]} />
      <Sphere scale={0.5} initRotation={[0, 0, 0]} position={[-2, -2, 0]} />
    </BasicProvider>
  );
};
```
