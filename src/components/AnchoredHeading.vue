<script>
import { h, toRef } from 'vue';
export default {
  name: 'AnchoredHeading2',
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  // components: {},
  // props: {},
  setup(props, context) {
    console.log('setup22');
    console.log(context.slots);
    const level = toRef(props, 'level');
    console.log(level.value);
    return () =>
      h('h' + level.value, {}, [
        context.slots.default(),
        h(
          'span',
          {
            style: {
              color: 'red'
            },
            title: 'ssss',
            'data-title': 'ssss',
            role: 'h1',
            id: 'h1-span',
            class: ['span', 'x']
          },
          context.slots.title()
        )
      ]);
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
