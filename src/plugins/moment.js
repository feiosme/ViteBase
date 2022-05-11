/*
 * @Date: 2022-03-24 15:18:48
 * @LastEditors: gpms
 * @LastEditTime: 2022-03-24 16:18:58
 * @FilePath: /GP-Management/src/plugins/moment.js
 */
import moment from 'moment-timezone';
import 'moment/dist/locale/zh-cn';

const _time = {
    timeFormat: (value, format, timezone) => {
        if (!value) {
            return '';
        }
        if (timezone) {
            return moment(new Date(value)).tz(timezone).format(format);
        }
        return moment(new Date(value)).format(format);
    },
    timeAgo: (value) => {
        if (!value) {
            return '';
        }
        return moment(new Date(value)).fromNow();
    },
    timeAuto: (value) => {
        if (!value) {
            return '';
        }
        const now = Math.floor(new Date().getTime());
        const sub = now - value;
        const days = Math.floor(sub / (24 * 3600 * 1000));
        const minutes = Math.floor(sub / (60 * 1000));
        if (days > 7) {
            return moment(new Date(value)).format('YYYY-MM-DD HH:mm:ss');
        }
        if (days > 0) {
            return moment(new Date(value)).calendar();
        }
        if (minutes > 0) {
            return moment(new Date(value)).fromNow();
        }
        return '刚刚';
    },
    setLocale: moment.updateLocale
};


export default {
    install: (app) => {
        Object.defineProperties(app.config.globalProperties, {
            moment: {
                get() {
                    return _time;
                }
            },
            $moment: {
                get() {
                    return _time;
                }
            }
        });
    }
};
