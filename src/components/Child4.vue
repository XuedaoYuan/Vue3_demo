<script>
import {
  h,
  ref,
  toRef,
  reactive,
  resolveComponent,
  onMounted,
  inject
} from 'vue';
import Child3 from './Child3';

const Item = {
  name: 'item',
  props: {
    title2: {
      type: String
    }
  },
  setup(props, context) {
    console.log(props, '------');
    const lis = [];
    const state = reactive({
      show: false
    });
    const title = toRef(props, 'title2');
    console.log(title);

    const userLocation = inject('userLocation');

    for (let i = 0, len = 10; i < len; i++) {
      lis.push(h('li', {}, i));
    }

    onMounted(() => {
      console.log('item mounted');
    });
    return () =>
      h(
        'ul',
        {
          class: { xx: true },
          id: 'ssss_ssssss'
        },
        [
          h(
            'li',
            {
              style: {
                color: 'green'
              }
            },
            userLocation
          ),
          h(
            'li',
            {
              class: 'trigger-li'
            },
            ['title=', h('span', {}, '---' + title.value)]
          ),
          ...lis
        ]
      );
  }
};

export default {
  name: 'Child4',
  // mixins: [],
  components: {
    Child3
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
          h(
            resolveComponent(Child3.name),
            {
              childName: 'child3 from child4'
            },
            'child3'
          ),
          h(Item, {
            role: 'item',
            title2: 'hello ul'
          })
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
<style lang='stylus'>
.trigger-li {
  cursor: pointer;
}
</style>
