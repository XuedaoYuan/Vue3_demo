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
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Directive',
  setup() {
    const show = ref(false);
    return { show };
  }
  // ,created() {},
  // ,methods: {}
});
</script>
<style lang="stylus" scoped></style>
