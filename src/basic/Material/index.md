---
nav:
  title: 组件
  path: /components
---

## Material（材质）

## 何时使用

当你需要给组件添加材质的时候，需要设置。我们也提供了一套默认的材质逻辑。

### 基本使用

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
