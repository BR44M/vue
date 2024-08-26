import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import Layout from "./Layouts/Layout.vue";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title}|CRUD`,
    resolve: (name) => {
      const pages = import.meta.glob("./Pages/**/*.vue",{eager: true});
      let page = pages[`./Pages/${name}.vue`];
      page.default.layout = page.default.layout || Layout;
      return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el);

    },
    progress: {
        color: '#4B5563',
        includeCSS: true,
        showSpinner: true,
    },
});
