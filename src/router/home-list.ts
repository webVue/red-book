import { RouteRecordRaw } from 'vue-router'

const homeList: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'about',
        component: () => import("../views/about/about.vue")
    },
    {
        path: '/404',
        name: 'errorPage',
        component: () => import("../views/errorPage/404.vue")
    }
]

export default homeList