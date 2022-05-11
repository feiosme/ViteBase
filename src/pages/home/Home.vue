<!--
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
-->
<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <p class="font-bold text-3xl inline-flex items-center space-x-2">
            <SvgIcon
                class="w-6 h-6"
                name="icon-heroicons-outline-home"
            />
            <span>Home</span>
        </p>
        <p>{{ t('Hello') }}</p>
        <button
            class="rounded-md bg-blue-50 px-2 py-1 m-1"
            @click="notify()"
        >
            notify
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import homeVueJs from './Home.vue.js';

export default defineComponent({
    ...homeVueJs
});
</script>