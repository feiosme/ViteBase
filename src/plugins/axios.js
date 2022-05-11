import axios from 'axios';
import store from '@/store';
import router from '@/router';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// _axios.interceptors.request.use(
//     (config) => {
//         // Do something before request is sent
//         return config;
//     },
//     (error) => {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

_axios.interceptors.request.use(
    (config) => {
        if ((store.state.auth.expire && parseInt(+(new Date()) / 1000) <= store.state.auth.expire) && store.state.auth.token) {
            config.headers.Authorization = `Bearer ${store.state.auth.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.dispatch('auth/userLogout');
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    });
            }
        }
        return Promise.reject(error);
    }
);

// // Add a response interceptor
// _axios.interceptors.response.use(
//     (response) => {
//         // Do something with response data
//         return response;
//     },
//     (error) => {
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );

export default {
    install: (app) => {
        Object.defineProperties(app.config.globalProperties, {
            axios: {
                get() {
                    return _axios;
                }
            },
            $axios: {
                get() {
                    return _axios;
                }
            }
        });
    }
};
