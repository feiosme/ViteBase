/*
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { useI18n } from 'vue-i18n';
export default {
    name: 'Home',
    setup() {
        const { t } = useI18n();

        const notify = () => {
            window.$notify({
                message: 'message',
                duration: 3000,
                type: 'success'
            });
        };
        return {
            t,
            notify
        };
    }
};