<template>
  <div>
    <slot name="title"></slot>
    <h3>child3</h3>
    <h4>{{childName}}=={{childName2}}</h4>
  </div>
</template>
<script>
import { toRef } from 'vue';
export default {
  name: 'Child3',
  // mixins: [],
  // components: {},
  props: {
    childName: {
      type: String
    }
  },
  setup(props, context) {
    // childName 可能没有 就需要使用toRef
    const childName = toRef(props, 'title');

    // Attribute (非响应式对象)
    console.log(context.attrs);

    // 插槽 (非响应式对象)
    console.log(context.slots.title);

    // 触发事件 (方法)
    console.log(context.emit);
    context.emit('click');

    return {
      childName2: childName.value + '222222'
    };
  }
  //   data() {
  //     return {};
  //   }
  // computed: {},
  // watch:{},
  // created() {},
  // mounted() {},
  // beforeDestory() {},
  // destoryed() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
