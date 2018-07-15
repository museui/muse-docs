// import '@babelpolyfill';
import Vue from 'vue';
import 'typeface-roboto';
import './assets/font-icons/material/material-icons.css';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import 'muse-ui-loading/dist/muse-ui-loading.css';
import 'muse-ui-progress/dist/muse-ui-progress.css';
import MuseUI from 'muse-ui';
import Progress from 'muse-ui-progress';
import Toast from 'muse-ui-toast';
import Message from 'muse-ui-message';
import Loading from 'muse-ui-loading';
import FastClick from 'fastclick';
import './theme.js';
import App from './App';
import ColorPalette from './components/color-palette';
import DemoBlock from './components/demo-block';
import router from './router';
import { changeLocale } from './locale';
import './registerServiceWorker';
Vue.use(MuseUI);
Vue.use(Progress, {
  color: 'secondary'
});
Vue.use(Toast);
Vue.use(Message);
Vue.use(Loading);
Vue.component(ColorPalette.name, ColorPalette);
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

if (navigator && navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) FastClick.attach(document.body);
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.lang) {
    changeLocale(to.meta.lang);
  }
  window.scrollTo(0, 0);
  Progress.start();
  next();
});

router.afterEach(() => {
  Progress.done();
});

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
