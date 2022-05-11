import { createVNode, render, isVNode } from 'vue';
import NotificationConstructor from './component/Notification.vue';

let seed = 1;
const GAP_SIZE = 16;
const notifications = [];

export function close(id, userOnClose) {
    console.log(id, userOnClose);
    const idx = notifications.findIndex(({ vm }) => vm.component.props.id === id);
    if (idx === -1) {return;}
    const { vm } = notifications[idx];
    if (!vm) {return;}
    userOnClose?.(vm);
    // const removedHeight = vm.el.offsetHeight
    const removedHeight = 50;
    notifications.splice(idx, 1);
    const len = notifications.length;
    if (len < 1) {return;}
    for (let i = idx; i < len; i++) {
        console.log(notifications[i].vm);
        // const { el, component } = notifications[i].vm;
        // const pos = parseInt(el.style.top, 10) - removedHeight - GAP_SIZE;
        // component.props.offset = pos;
    }
}

export function closeAll() {
    notifications.forEach(({ vm }) => {
        (vm.component.proxy).visible = false;
    });
}

const Notification = function (options = {}) {
    const id = 'notification_' + seed++;

    let verticalOffset = options.offset || 80;
    notifications.forEach(() => {
        // verticalOffset += (vm.el.offsetHeight || 0) + GAP_SIZE
        verticalOffset += 50 + GAP_SIZE;
    });
    verticalOffset += GAP_SIZE;

    const userOnClose = options.onClose;
    options = {
        // default options end
        ...options,
        offset: verticalOffset,
        onClose: () => {
            close(id, userOnClose);
        },
        id
    };

    const container = document.createElement('div');

    const vm = createVNode(
        NotificationConstructor,
        options,
        isVNode(options.message)
            ? {
                default: () => options.message
            }
            : null
    );

    vm.props.onDestroy = () => {
        console.log(container);
        render(null, container);
    };

    render(vm, container);
    notifications.push({ vm });
    document.body.appendChild(container.firstElementChild);

    return {
        close: () => {
            (vm.component.proxy).visible = false;
        }
    };
};

export default {
    install(app) {
        app.config.globalProperties.$notify = Notification;
    }
};
