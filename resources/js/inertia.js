import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import Logo from "./Pages/Components/Logo.vue";
import ProfilePicture from "./Pages/Components/ProfilePicture.vue";

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Logo", Logo)
            .component("ProfilePicture", ProfilePicture)
            .mount(el)
    },
})
