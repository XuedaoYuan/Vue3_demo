<template>
  <div>
    <p>mousePos: {{x}}-{{y}}</p>
  </div>
</template>
<script>
// import {} from 'vue'
import { useMousePosition } from './Hooks';
export default {
  name: 'Hooks',
  // components: {},
  // props: {},
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y
    };
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
