<template>
  <div>
    <h1>LifeCircle</h1>
  </div>
</template>
<script lang="ts">
interface MyFace<T> {
  name: T;
}

const arg: MyFace<string> = { name: 'sss' };
import {
  defineComponent,
  onErrorCaptured,
  Component,
  toRef,
  h,
  onMounted,
  onRenderTracked,
  DebuggerEvent,
  ref,
  onRenderTriggered
} from 'vue';
const Child = defineComponent({
  name: 'Child',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const title = toRef(props, 'title');
    onMounted(() => {
      //   throw new Error('test error');
    });
    return () => h('div', {}, title.value);
  }
});
export default defineComponent({
  name: 'LifeCircle',
  setup() {
    const text = ref('123');
    text.value = '345';
    onErrorCaptured((error, instance, info) => {
      console.error(error);
      console.log(instance, info);
    });
    // 跟踪虚拟 DOM 重新渲染时调用。
    onRenderTracked((e: DebuggerEvent) => {
      console.log('%conRenderTracked', 'color: red;');
      console.log(e);
    });
    // 当虚拟 DOM 重新渲染被触发时调用。
    onRenderTriggered((e) => {
      console.log('%conRenderTriggered', 'color: red;');
      console.log(e);
    });
    return () =>
      h('div', { class: 'life-circle' }, [
        h(Child, { title: 'child title' }),
        h(
          'button',
          {
            onClick: ($event: Event) => {
              console.log(text);
              text.value = '456';
            }
          },
          'change'
        ),
        h('p', {}, text.value)
      ]);
  }
  // ,created() {},
  // ,methods: {}
});
</script>
<style lang="stylus" scoped></style>
