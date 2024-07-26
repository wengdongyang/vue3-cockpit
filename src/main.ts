/** @format */
import 'minireset.css/minireset.css';
import 'nprogress/nprogress.css';
import 'vue-final-modal/style.css';
import 'ant-design-vue/dist/reset.css';
import 'vue-json-pretty/lib/styles.css';
import 'font-awesome/css/font-awesome.css';
import '@wangeditor/editor/dist/css/style.css';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './styles/reset/index.less';
import './styles/tailwind.css';

import 'echarts';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

dayjs.locale('zh-cn');

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(Antd);
app.use(pinia);
app.use(router);

app.mount('#app');
