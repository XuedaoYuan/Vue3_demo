
<script>
import { ref, watch, h, reactive } from 'vue';
const Child = {
  name: 'Child',
  props: ['title'],
  render() {
    return h('p', { class: 'child__container' }, this.$props.title);
  }
};
export default {
  name: 'ReactiveBase',
  // components: {},
  // props: {},
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const changeLogs = [];
    // 侦听多个响应式对象
    watch([firstName, lastName], (newValues, oldValues) => {
      console.log(newValues);
      changeLogs.push(newValues);
    });
    firstName.value = 'xuedao';
    lastName.value = 'yuan';
    lastName.value = 'yuan1';
    // 侦听多个数组或者对象
    const numbers = reactive([1, 2, 3, 4]);
    watch(
      () => [...numbers],
      (newNumbers) => {
        console.log(newNumbers);
      }
    );
    numbers[0] = 4;

    // watch 嵌套对象时还是需要使用deep属性
    const state = reactive({
      id: '1',
      attributes: {
        name: '',
        age: 0,
        children: [1, 2]
      }
    });
    watch(
      () => ({ ...state }),
      (newState, oldState) => {
        console.log('deep');
        console.log(newState);
      },
      { deep: true }
    );
    return () =>
      h(
        'div',
        {
          class: 'main__container',
          style: {
            color: 'red'
          }
        },
        [
          h(
            'p',
            {},
            `${firstName.value.toUpperCase()}-${lastName.value.toUpperCase()}`
          ),
          h(
            'ul',
            {
              style: { color: '#000' }
            },
            changeLogs.map((log) => h('li', {}, log.join('-')))
          ),
          h(
            'button',
            {
              onClick: ($event) => {
                console.log($event);
                firstName.value = 'xuedao' + Math.random();
              }
            },
            'click me'
          ),
          h('hr'),
          h('ol', {}, [
            h(
              'li',
              {},
              h(
                'button',
                {
                  onClick: ($event) => {
                    numbers[0] = 100;
                    numbers.push(5);
                  }
                },
                'change numbers'
              )
            ),
            ...numbers.map((num) => h('li', num))
          ]),
          h(Child, {
            //   props
            title: 'child -- title'
          }),
          h('hr', { style: { margin: '20px 0' } }),
          h(
            'pre',
            {},
            JSON.stringify(
              state,
              (k, v) => {
                if (k === 'id') return 'ssssss';
                return v;
              },
              2
            )
          ),
          h(
            'button',
            {
              onClick: () => {
                state.attributes.name = 'Cloud';
              }
            },
            'change state'
          ),
          h(
            'button',
            {
              onClick: () => {
                state.attributes.children.push(3);
              }
            },
            'change child'
          )
        ]
      );
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus'>
.main__container {
  color: red;
}
</style>
