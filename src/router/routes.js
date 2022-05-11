/*
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
 */

// App Layout
const AppLayout = () => import('@/layouts/AppLayout.vue');

// Home Page
const Home = () => import('@/pages/home/Home.vue');

export default [
    {
        path: '/',
        name: 'AppLayout',
        component: AppLayout,
        meta: {
            title: 'AppLayout',
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    i18n_key: 'home',
                    title: 'Home'
                }
            }
        ]
    }
];
