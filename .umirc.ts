import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index', name: '首页' }],
  fastRefresh: {},
  // layout: {
  //   // 支持任何不需要 dom 的
  //   // https://procomponents.ant.design/components/layout#prolayout
  //   name: '系统',
  //   locale: true,
  //   layout: 'side',
  // },
  antd: {},
});
