// - 页面短横线 (与路由相同: user-monitor/user-list.vue)
// - 组件小驼峰 (components/User/UserInfo.vue)
// - 路径短横线 (views/user-monitor/add-user.vue)

/*
 * 路由约定(初稿)
 * 1. meta.layout != false 的路由将会显示到登录后的侧边菜单
 * 2. 侧边栏页面必须有一个component: SecurityLayout的上级
 * 3. 如果分组只有一个子菜单，那么这个子菜单将直接被展示（而不需要展开）
 * 4. 如果分组子菜单多于一个，那么需要设置meta.title
 */
import { RouteRecordRaw } from "vue-router";
import  BasicLayout  from "../layouts/BasicLayout.vue"

export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
    meta: {
      title: "",
      layout: false,
      allowAnonymous: true,
    },
  },
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: "",
      layout: false,
    },
  },
  {
    path: "/user",
    component: BasicLayout,
    redirect: "/user/changePassword",
    children: [
      {
        path: "changePassword",
        name: "user",
        component: () => import("../views/user/changePassword.vue"),
        meta: {
          title: "Change Password",
        },
      },
    ],
  },
];
