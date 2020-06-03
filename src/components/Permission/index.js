import permission from './permission'

// 添加自定义指令
const install = function(Vue) {
  // 权限验证
  Vue.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}

// 确保多次使用时只加载一次
permission.install = install
export default permission
