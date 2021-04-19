<template>
  <div>
    <button :class="[$style.button]">button</button>
    <p :class="[a.red]">asdasd</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CSSModule',
  setup() {
    return {};
  },
  created() {
    // ts-ignore
  }
  // ,methods: {}
});
</script>
<style module>
.button {
  color: red;
}
</style>

<style module="a">
.red {
  color: red;
}
</style>
