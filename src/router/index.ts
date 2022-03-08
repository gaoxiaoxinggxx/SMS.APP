import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { routes } from "./routers";
// import '../api/fetch-interceptor'


export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    next();
    // if (to.meta.allowAnonymous) {
    //   next();
    // }else{
    //   if(!store.state.isLogin){
    //       await store.dispatch('fetchUserInfo')
    //       next();
    //   }else{
    //     next();
    //   }
    // }
  });