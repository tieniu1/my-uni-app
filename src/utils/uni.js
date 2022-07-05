// 设置tabBar
// 执行上下文，active的index，回调函数，回调函数的this
export const setTabBarActive = (context, index, callback, callbackBind) => {
  if (
    context.$mp.page &&
    typeof context.$mp.page.getTabBar === 'function' &&
    context.$mp.page.getTabBar()
  ) {
    context.$mp.page.getTabBar().setList();
    context.$mp.page.getTabBar().setData({
      active: index,
    });
    if (typeof callback === 'function') {
      callback(callbackBind);
    }
  }
};
