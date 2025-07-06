import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(`@/views/login/login.vue`),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }
