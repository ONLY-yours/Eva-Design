---
nav:
  title: 组件
  path: /components
---

## BasicProvider

## 何时使用

BasicProvider 基本内容提供組件。你可以通过设置 BasicProvider 来修改部分我们认为的设置模式，包括但不限于以下几个部分：

- Light（光源）
- Environment（环境，默认关闭）
- OrbControls（物体控制器，默认关闭）
- Canvas（渲染的 Canvas）

> 注意：如果你觉得默认模式 + Api 修改仍然不能满足你的需求，你可以通过 Api 来关闭我们提供的内容，自己编写 Canvas、Light 等内容。

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

### 使用框架提供背景

框架提供了默认的背景，可以在用于开发阶段，设计师暂未提供环境内容的情况下，暂时使用进行大体环境预览。详情见 BasicEnvironment 组件。

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight } from 'eva-design-three';

export default () => {
  return (
    <BasicProvider EnvironmentSetting={true}>
      <PointLight position={[10, 10, 10]} />
      <Box initRotation={[0.5, 0.5, 0]} />
    </BasicProvider>
  );
};
```

### 使用控制器控制整个 3d 内容

需要注意的是，使用这个控制器，能控制视角中的 Camare 转向角度。并且可以改动 3D 模型的展示大小，但是环境不会被改变，只要使用这个控制器后，整个物体的缩放 Scale 参数只能在第一次初始化中起到作用，后续无法通过 Scale 来控制缩放。

> 注意： 如果这个控制器设置不能满足你的话，你也可以通过 OrbControlsSetting 中的 Render 来自定义控制器的内容，本质上该控制器也是通过三方 Drei 来进行控制。详情见 https://github.com/pmndrs/drei

```tsx
import React from 'react';
import { BasicProvider, Box, PointLight } from 'eva-design-three';
import { Environment } from '@react-three/drei';

export default () => {
  return (
    <>
      <BasicProvider
        EnvironmentSetting={{
          environmentRender: <Environment preset="sunset" background />,
        }}
        OrbControlsSetting={true}
      >
        <PointLight position={[10, 10, 10]} />
        <Box initRotation={[0.5, 0.5, 0]} />
      </BasicProvider>
    </>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultLightSetting | 默认光源设置 | `boolean \| LightSettingProps` | true |
| EnvironmentSetting | 是否采需要框架帮助添加背景内容 | `boolean \| EnvironmentProps` | false |
| OrbControlsSetting | 是否可以随意移动镜头、伸缩 | `boolean \| OrbControlsSettingProps` | false |
| externalRender | 额外的配置项，我们会在默认的组件最后给你加载进去 | `React.Node` | false |
