/*
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// vue package.json
// "eslint": "^7.30.0",
// "eslint-config-nineko": "^0.0.3",
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: ['nineko/base', 'nineko/vue3'],
    rules: {
        'vue/require-explicit-emits': 'off'
    }
};
