import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import { router } from './router';
// 添加fetch 拦截器的引用
import '../src/api/fetch-interceptor'

const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount('#app');
