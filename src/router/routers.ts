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
import UserLayout from '../layouts/UserLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect:"/login",
    component: UserLayout,
    children: [
      {
        name: "login",
        path: "/login",
        component: () => import("../views/auth/login/index.vue"),
        meta: {
          title: "login",
        },
      },
    ],
  },
  {
    path: "/changePassword",
    component: BasicLayout,
    redirect: "/changePassword",
    children: [
      {
        name: "changePassword",
        path: "/changePassword",
        component: () => import("../views/auth/changePassword/index.vue"),
        meta: {
          title: "Change Password",
        },
      },
      {
        name:"userList",
        path:"/userList",
        component:()=>import("../views/user/userList/index.vue"),
        meta: {
          title: "Change Password",
        }
      }
    ],
  },
];
