export default {
  title: 'Eva-Design',
  base: '/Eva-Design',
  publicPath: './',
  favicon: './eva-design-icon128.png',
  logo: './eva-design-icon128.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  styles: [
    '.__dumi-default-layout-content > .markdown:first-child:empty, button.__dumi-default-icon[role="codesandbox"] { display: none; }',
    '.__dumi-default-layout-hero { background: url("./eva-background.jpg") no-repeat; background-size: cover; } ',
    '  h1,h2 { color: rgba(132,102,220,1) !important;}',
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '基本组件',
        children: [
          // 菜单子项（可选）
          // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          '/basic/Provider',
          '/basic/Environment',
          '/basic/Mesh',
          '/basic/Material',
          '/basic/Light',
        ],
      },
      {
        title: '3D组件',
        children: [
          // 菜单子项（可选）
          // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          '/3DComponent/basicApi',
          '/3DComponent/Box',
          '/3DComponent/Cylinder',
          '/3DComponent/Sphere',
          '/3DComponent/Cone',
          '/3DComponent/Dodecahedron',
        ],
      },
      {
        title: '2D组件',
        children: ['/2DComponent/Circle'],
      },
      {
        title: '自定义组件',
        children: ['/customComponent/Gltf', '/customComponent/Obj'],
      },
    ],
    // // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    // '/zh-CN/guide': [
    //   // 省略，配置同上
    // ],
  },

  // navs: [
  //   {
  //     title: '我有二级导航',
  //     path: '链接是可选的',
  //     // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
  //     children: [
  //       { title: '第一项', path: '/Box' },
  //       { title: '第二项', path: '/Sphere' },
  //     ],
  //   },
  // ],
};
