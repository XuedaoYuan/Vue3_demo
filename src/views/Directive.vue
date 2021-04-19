<template>
  <div>
    <p>
      <input v-focus
             type="text">
    </p>
    <span v-show2="show"> ssdd</span>
    <button @click="show = !show">trigger</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, unref } from 'vue';
export default defineComponent({
  name: 'Directive',
  setup() {
    const show = ref(false);
    console.log(unref(show));

    Boolean.prototype.toString = function () {
      if (this) {
        return '真';
      }
      return '假';
    };

    console.log(unref(show).toString());
    console.log(Boolean.prototype.toString.call('1'));

    const state = { count: 0 };
    const stateRef = toRef(state, 'count');
    stateRef.value++;
    console.log("stateRef.value", stateRef.value);
    console.log("state.count", state.count);

    return { show };
  }
  // ,created() {},
  // ,methods: {}
});
</script>
<style lang="stylus" scoped></style>
