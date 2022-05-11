/*
 * @Author: Jin
 * @Date: 2020-02-19 21:06:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-24 14:01:35
 * @FilePath: /Browser/src/store/modules/auth.js
 */
const state = {
    isLogin: Boolean(sessionStorage.getItem('isLogin')) || false,
    token: sessionStorage.getItem('token') || null,
    expire: Number(sessionStorage.getItem('expire')) || null,
    user_info: sessionStorage.getItem('user_info') ? JSON.parse(sessionStorage.getItem('user_info')) : {
        base: {
            rid: 1
        }
    }
};

// getters
const getters = {
    isLogin: state => state.isLogin
};

// actions
const actions = {
    userLogin({ commit }, data) {
        commit('SET_ISLOGIN', true);
        commit('SET_TOKEN', data.token);
        commit('SET_EXPIRE', data.expire);
    },
    userLogout({ commit }) {
        commit('SET_ISLOGIN', false);
        commit('SET_TOKEN', '');
        commit('SET_EXPIRE', 0);
        commit('SET_USERINFO', {});
    },
    setUserInfo({ commit }, data) {
        commit('SET_USERINFO', data);
    },
    setUserRid({ commit }, data) {
        commit('SET_USERRID', data);
    }
};

// mutations
const mutations = {
    SET_ISLOGIN(state, flag) {
        sessionStorage.setItem('isLogin', flag);
        state.isLogin = flag;
    },
    SET_TOKEN(state, token) {
        sessionStorage.setItem('token', token);
        state.token = token;
    },
    SET_EXPIRE(state, expire) {
        sessionStorage.setItem('expire', expire);
        state.expire = expire;
    },
    SET_USERINFO(state, user_info) {
        sessionStorage.setItem('user_info', JSON.stringify(user_info));
        state.user_info = user_info;
    },
    SET_USERRID(state, rid) {
        state.user_info.base.rid = rid;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
