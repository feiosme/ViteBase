<template>
    <svg
        aria-hidden="true"
        stroke="currentColor"
        fill="none"
    >
        <use
            :xlink:href="symbolId"
            :stroke-width="width"
        />
    </svg>
</template>

<script lang="ts">
import { toRefs, computed, defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 0.2
        }
    },
    setup(props) {
        const { name, width } = toRefs(props);
        const symbolId = computed(() => `#${name.value}`);

        return {
            // eslint-disable-next-line vue/no-dupe-keys
            width,
            symbolId
        };
    }
});
</script>
