<template>
  <div>
    <h1>about</h1>
    <p>{{state.count}}</p>
    <button @click="add">add</button>
    <p>{{count2}}</p>
    <p>{{count3}}</p>
    <button @click="$toast('阿斯达撒' + Math.random())">toast</button>
  </div>
</template>
<script>
import { reactive, ref, watchEffect, watch } from 'vue';
export default {
  name: 'About',
  // components: {},
  // props: {},
  setup() {
    const state = reactive({
      count: 1
    });
    const stop = watchEffect(
      (onInvalidate) => {
        console.log(state.count);
      },
      {
        flush: 'pre', // 默认值
        onTrack(e) {
          console.log('依赖被追踪');
        },
        onTrigger(e) {
          console.log('值改变了');
        }
      }
    );
    state.count = 2;

    const count2 = ref(0);
    count2.value = 10;

    let count3 = reactive(0);
    count3 = 1;

    return {
      state,
      count2,
      count3
    };
  },
  // created() {},
  methods: {
    add() {
      this.state.count++;
      this.count2++;
      this.count3--;
    }
  }
};
</script>
<style lang='stylus' scoped></style>
