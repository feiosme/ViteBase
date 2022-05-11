import { ref, onMounted, computed } from 'vue';

const TypeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

export default {
    name: 'Notification',
    props: {
        id: { type: String, default: '' },
        customClass: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 5000
        },
        onClose: {
            type: Function,
            required: true
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    emits: ['destroy'],
    computed: {
        typeClass () {
            return this.type && TypeMap[this.type] ? this.$style[TypeMap[this.type]] : '';
        }
    },
    setup(props) {
        const visible = ref(false);
        let timer = null;

        const positionStyle = computed(() => {
            return {
                top: `${props.offset}px`,
                '--animation-duration': `${props.duration}ms`
            };
        });

        function close() {
            visible.value = false;
        }

        function startTimer() {
            if (props.duration > 0) {
                timer = setTimeout(() => {
                    if (visible.value) {
                        close();
                    }
                }, props.duration);
            }
        }

        function clearTimer() {
            clearTimeout(timer);
            timer = null;
        }


        onMounted(() => {
            startTimer();
            visible.value = true;
        });

        return {
            visible,
            close,
            clearTimer,
            startTimer,
            positionStyle
        };
    }
};
