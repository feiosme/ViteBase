import { createStore } from 'vuex';

function loadModules() {
    const modulesJs = import.meta.globEager('./modules/*.module.js');
    const modules = {};
    Object.keys(modulesJs).forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const module = matched[1];
            modules[module] = modulesJs[key].default;
        }
    });
    return modules;
}

const store = createStore({
    modules: loadModules()
});

export default store;
