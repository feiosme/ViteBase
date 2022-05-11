<!--
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
-->
<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <p class="font-bold text-3xl">Home</p>
        <p>{{ t('Hello') }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import homeVueJs from './Home.vue.js';

export default defineComponent({
    ...homeVueJs
});
</script>