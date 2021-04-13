import Toast from './Toast.vue';
import { createApp, ref } from 'vue';
import './toast.styl';
let initFlag = false;
let toastInstance: any;
let toastApp: any;
let toastRoot: HTMLDivElement;
let timer: number;
export function toast(message: string, duration = 1500) {
  if (!initFlag) {
    toastApp = createApp(Toast);
    toastRoot = document.createElement('div');
    toastRoot.classList.add('xd-toast');
    toastInstance = toastApp.mount(toastRoot);
    document.body.appendChild(toastRoot);
    initFlag = true;
  }
  if (timer) {
    clearTimeout(timer);
    timer = 0;
    toastInstance.$el.innerText = message;
    timer = setTimeout(() => {
      toastRoot.classList.add('xd-toast--fade-out');
      Promise.resolve().then(() => {
        //   toastRoot.style.display = 'none';
      });
    }, duration);
  } else {
    toastInstance.$el.innerText = message;
    toastRoot.classList.add('xd-toast--fade-in');
    toastRoot.style.display = 'block';
    setTimeout(() => {
      toastRoot.classList.remove('xd-toast--fade-in');
      clearTimeout(timer);
      timer = 0;
    }, 0);
    timer = setTimeout(() => {
      toastRoot.classList.add('xd-toast--fade-out');
      Promise.resolve().then(() => {
        //   toastRoot.style.display = 'none';
      });
    }, duration);
  }
}

/* export default {
    install(){

    }
};
 */
