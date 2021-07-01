<template>
  <div class="tab__container">
    <button>{{title}}</button>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// import {} from 'vue'
export default {
  name: 'Tab',
  // components: {},
  props: {
    title: {
      type: String
    },
    name: {
      tyoe: String
    }
  },
  setup() {
    return {};
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
