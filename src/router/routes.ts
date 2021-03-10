import { RouteRecordRaw } from 'vue-router'
import homeList from './home-list'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/home/home.vue"),
        redirect: '/about',
        children: [...homeList]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/login/login.vue"),
    },
    {
        // vue2 采用 *匹配     3.0 采用正则 方法如下 /:pathMatch(.*)* 或 /:pathMatch(.*)  或 /:catchAll(.*)
        redirect: "/404",
        path: "/:pathMatch(.*)*"
    }
]

export default routes;