/*
 * @Author: feiosme
 * @LastEditors: 
 * @Description: 
 */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import meta from './meta';
import i18n from './i18n';

// import styles
import './import-style';
import 'virtual:svg-icons-register';

// import plugins
import axios from './plugins/axios';
import moment from './plugins/moment';
import notification from './plugins/notification';

import App from './layouts/App.vue';
import SvgIcon from '@/components/svg-icon/SvgIcon.vue';

const app = createApp(App);

app.use(i18n);
app.use(meta);
app.use(axios);
app.use(store);
app.use(router);
app.use(moment);
app.use(notification);

app.component('SvgIcon', SvgIcon);

app.mount('#app');
