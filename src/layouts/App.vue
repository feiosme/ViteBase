<!--
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
    <Meta />

    <router-view />
</template>

<script>
// import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import Meta from '@/meta/component.vue';
import { getCurrentInstance, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default({
    name: 'App',
    components: {
        Meta
    },
    setup() {
        const { t } = useI18n();
        const { proxy } = getCurrentInstance();
        window.$notify = proxy.$notify;
        const route = useRouter();

        // useMeta({
        //     title: '',
        //     htmlAttrs: { lang: 'en', amp: true }
        // });

        const computedMeta = computed(() => ({
            title: t(route.currentRoute.value.name || '')
            // description : `current ${currentRoute.value}`
            // htmlAttrs: { lang: 'en', amp: true }
        }));

        const { meta } = useMeta(computedMeta);
    }
});
</script>