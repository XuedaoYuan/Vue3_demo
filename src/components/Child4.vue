<script>
import { h, ref, reactive } from 'vue';
import Child3 from './Child3';
export default {
  name: 'Child4',
  // mixins: [],
  components: {
    child3: Child3
  },
  // props: {},
  setup(props, context) {
    const readerNumber = ref(0);
    const user = reactive({ name: 'You yu xi ' });
    return () =>
      h(
        'div',
        {
          style: {
            color: 'red'
          },
          class: ['x', 'y']
        },
        [
          h('span', user.name),
          h('span', readerNumber.value),
          context.slots.title(),
          h('div', child3)
        ]
      );
  }
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
