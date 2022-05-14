---
nav:
  title: 组件
  path: /components
---

## Environment（环境）

## 何时使用

**_建议只在 Dev 环境下使用_**

当你需要给组件添加环境的时候，需要设置。我们也提供了一套默认的环境逻辑，你可以通过 BasicProvider 中通过 Setting 进行设置，或者直接放置在组件的同级。（当然 Provider 也有配置 Render 可以渲染改内容，这两者是等价的）

## 使用前注意点

- 打开环境配置会导致加载时间，因为需要渲染整个内容的环境内容，需要等待全部渲染完成后才能展示。因此对于大工程来说请慎重使用。
- 有概率会出现无法加载的情况，稳定性收到各种情况影响，例如，环境、网络，等等情况，如果要在生产环境下，请最好不要使用我们提供的这些环境配置。自己添加 Environment 进行展示，可以参考：https://github.com/pmndrs/drei

### 基本使用

环境默认开启的时候，默认是 sunset 背景。

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight, BasicEnvironment } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment />
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 通过 BasicProvider 来配置环境

除了 environmentRender 之外的其他配置，都会被注入到 BasicEnvironment 中去，可以直接通过这个进行配置。

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight, BasicEnvironment } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider
      EnvironmentSetting={{
        enviromentScreen: 'apartment',
        background: true,
      }}
    >
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

## API

| 参数             | 说明           | 类型       | 默认值   |
| ---------------- | -------------- | ---------- | -------- |
| isbackground     | 是否是背景环境 | `boolean ` | true     |
| enviromentScreen | 默认环境的配置 | `string`   | `sunset` |

### 环境配置（基本种类展示）

我们给大家提供了一些默认环境配置，'sunset'、'dawn'、 'night'、'warehouse'、'forest'、'apartment'、'studio'、'city'、'park'、'lobby'，下面展示这些内容。

因为需要旋转展示所有的内容，我们给下面的例子加上了 OrbitControls ，大家可以通过拖拽旋转查看最适合自己使用的环境内容。

#### dawn

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'dawn'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### night

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'night'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### warehouse

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'warehouse'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### forest

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'forest'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### apartment

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'apartment'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### studio

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'studio'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### city

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'city'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### park

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'park'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```

#### lobby

```tsx
import React from 'react';
import { BasicProvider, BasicEnvironment } from 'eva-design-three';
import { OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <BasicProvider>
      <BasicEnvironment enviromentScreen={'lobby'} />
      <OrbitControls />
    </BasicProvider>
  );
};
```
