---
nav:
  title: 组件
  path: /components
---

## Cone （圆锥体）

## 何时使用

- 需要一个圆锥体时。
- 圆锥体可以旋转，自定义变换位置。

### 基本使用

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cone initRotation={[0.5, 0.5, 0]} height={4} />
    </BasicProvider>
  );
};
```

### 开启自动旋转

通过设定 `autoSpin` 为 `true` 来打开自动旋转。

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cone autoRotate={true} />
    </BasicProvider>
  );
};
```

### 手动指定圆锥体的棱长

通过指定 `length` 来自定义圆锥体的棱长。

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';
export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cone length={2} initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 手动指定圆锥体的高度

通过指定 `height` 来自定义圆锥体的高度。默认高度和棱长一样，不指定的时候和 length 一致。

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';
export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cone height={5} initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 设定初始化旋转偏移量

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Cone initRotation={[1, 0, 0.5]} />
    </BasicProvider>
  );
};
```

### 设定缩放比例

设置 `initRotation` 可以自定义设置初始化旋转偏移量。

> 如果同时设置了初始化偏移量和自动旋转，可能会导致效果变差，建议关闭自动旋转情况下使用。

```tsx
import React from 'react';
import { Cone, BasicProvider, PointLight } from 'Eva-Design';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[0, 0, 0]} />
      <Cone scale={0.5} initRotation={[0, 0, 0]} position={[2, 2, 0]} />
      <Cone scale={0.5} initRotation={[0, 0, 0]} position={[-2, 2, 0]} />
      <Cone scale={0.5} initRotation={[0, 0, 0]} position={[2, -2, 0]} />
      <Cone scale={0.5} initRotation={[0, 0, 0]} position={[-2, -2, 0]} />
    </BasicProvider>
  );
};
```

## API

| 参数   | 说明         | 类型     | 默认值             |
| ------ | ------------ | -------- | ------------------ |
| length | 棱线边界长度 | `number` | 3                  |
| height | 棱柱高度     | `number` | 默认和 length 同高 |
