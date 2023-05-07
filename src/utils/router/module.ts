/**
 * 权限路由排序，根据meta里面的order进行判断
 * @param routes - 权限路由
 */
export function sortRoutes(routes: AuthRoute.Route[]) {
  return routes
    .sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order))
    .map(i => {
      if (i.children) sortRoutes(i.children);
      return i;
    });
}

/**
 * 处理全部导入的路由模块
 * 大概意思就是，因为moudles导出的不太适合作为routes：RouteRecordRaw[]，所以需要设置
 * @param modules - 路由模块
 *
 */

export function handleModuleRoutes(modules: AuthRoute.RouteModule) {
  const routes: AuthRoute.Route[] = [];

  Object.keys(modules).forEach(key => {
    const item = modules[key].default;
    if (item) {
      routes.push(item);
    } else {
      window.console.error(`路由模块解析出错: key = ${key}`);
    }
  });

  return sortRoutes(routes);
}
