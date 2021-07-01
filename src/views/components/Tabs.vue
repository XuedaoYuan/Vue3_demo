<template>
  <div class="tabs__container">
    <!-- <div>{{modelValue}}</div> -->
    <div class="van-tabs__wrap">

    </div>
    <div class="van-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// import {} from 'vue'
export default {
  name: 'Tabs',
  // components: {},
  props: {
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
  created() {
    console.log(this.$slots);
    console.log(this.$children);
  }
  // ,methods: {}
};
</script>
<style lang='stylus' scoped>
.van-tabs__wrap {
  display: flex;
  align-items: center;
}
</style>
