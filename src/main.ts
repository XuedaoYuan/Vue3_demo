import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import SayHi from '@/components/SayHi.vue';

import i18nPlugin from '@/plugins/i18n';

import { toast } from '@/components/Toast';

const app = createApp(App);
console.log(app.config);
app.component('say-hi', SayHi);

// const sayHiComponent = app.component('say-hi', {});
// console.log(sayHiComponent, '--');

// 全局变量 其他的组件实例可以使用比如this.$all 访问到
app.config.globalProperties.$all = Promise.all;
app.config.globalProperties.$toast = toast;

/* 注册指令 */
app.directive('focus', {
  created(el) {
    console.log(el);
  },
  mounted(el: HTMLElement, binding) {
    console.log(binding.instance, el);
    el.focus();
  }
});

app.directive('show2', {
  created(el: HTMLElement, binding) {
    const display = !!binding.value;
    if (display) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  },
  updated(el, binding) {
    const display = !!binding.value;
    if (display) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  }
});

const i18nStrings = {
  greeting: {
    hi: 'hello'
  }
};
app.use(i18nPlugin, i18nStrings);

app
  .use(store)
  .use(router)
  .mount('#app');
