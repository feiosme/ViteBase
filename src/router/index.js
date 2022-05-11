/*
 * @Date: 2021-11-16 11:54:26
 * @LastEditors: gpms
 * @LastEditTime: 2022-05-03 10:30:01
 * @FilePath: /GP-Management/src/router/index.js
 */
import { Buffer } from 'buffer';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from '../store';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.meta?.scrollTop) {
            return {top: to.meta?.scrollTop || 0};
        }
        return { top: 0 };

    }
});

router.beforeEach((to, from) => {
    // const expire = store.state.auth.expire;
    // console.log(parseInt(+(new Date()) / 1000),expire);
    // if (!expire || (expire && parseInt(+(new Date()) / 1000) > expire)) {
    //     store.dispatch('auth/userLogout');
    // }
    // // 可能问题在expire
    // console.log(expire);

    // const isLogin = store.state.auth.isLogin;
    // if (to.meta.requiresAuth && !isLogin) {
    //     const params = {
    //         redirect: to.path,
    //         query: to.query
    //     };

    //     return {
    //         path: '/login',
    //         query: {
    //             redirect: Buffer.from(JSON.stringify(params), 'utf-8').toString('base64')
    //         }
    //     };
    // }

    to.meta.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
});

// router.afterEach((from, to) => {
//     // console.log(router.currentRoute.value.meta);
//     // 从 Function Page 返回不会让页面置顶
//     // console.log('title',to.meta.title);
//     console.log("1111", from.meta.scrollTop)
//     if(!from.meta.scrollTop) {
//         console.log('go top');
//         document.body.scrollTop = 0;
//     } else {
//         document.body.scrollTop = from.meta.scrollTop;
//     }
// });

export default router;
