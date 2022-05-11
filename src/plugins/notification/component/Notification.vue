<template>
    <!-- eslint-disable vue/require-explicit-emits -->
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-x-2 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transform ease-in duration-300 transition"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-2 opacity-0"

        @before-leave="onClose"
        @after-leave="$emit('destroy')"
    >
        <div
            v-show="visible"
            :id="id"
            role="alert"
            :style="positionStyle"
            :class="[$style.notification]"
        >
            <div :class="[typeClass]">
                <span>{{ message }}</span>
            </div>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue';
import notificationVueJs from './Notification.vue.js';

export default defineComponent({
    ...notificationVueJs
});
</script>

<style lang="scss">
@import './Notification.vue.scss';
</style>

<style lang="scss" scoped module>
@import './Notification.vue.module.scss';
</style>
