const state = {
    major: localStorage.getItem('define_major') ? JSON.parse(localStorage.getItem('define_major')) : [],
    academy: localStorage.getItem('define_academy') ? JSON.parse(localStorage.getItem('define_academy')) : []
};

// getters
const getters = {
    getMajorById: (state) => (id) => {
        return state.major.find(m => m.mid === id);
    },
    getAcademyById: (state) => (id) => {
        return state.academy.find(a => a.aid === id);
    }
};

// actions
const actions = {
    setMajor({ commit }, data) {
        commit('SET_MAJOR', data);
    },
    setAcademy({ commit }, data) {
        commit('SET_ACADEMY', data);
    }
};

// mutations
const mutations = {
    SET_MAJOR(state, major) {
        localStorage.setItem('define_major', JSON.stringify(major));
        state.major = major;
    },
    SET_ACADEMY(state, academy) {
        localStorage.setItem('define_academy', JSON.stringify(academy));
        state.academy = academy;
    },
    SET_PROCESS_CONTROL(state, process_control) {
        localStorage.setItem('process_control', JSON.stringify(process_control));
        state.process_control = process_control;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
