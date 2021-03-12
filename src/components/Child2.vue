<template>
  <div>Child2

    <p>x: {{x}}, user{{user}}</p>
    <ul>
      <li v-for="i in list" :key="i">{{i}}</li>
    </ul>
  </div>
</template>
<script>
// 可以利用ref使任何变量变成可响应的
import { computed, ref, toRefs, watch, onMounted, onBeforeMount } from 'vue';
//
const counter = ref(1);
console.log(counter.value);
console.log(counter);
watch(counter, (newVal, oldVal) => {
  console.log(`%ccounter has been changed ${newVal} ${oldVal}`, 'color: cyan;');
});
// computed 函数返回一个只读的响应式对象
const twiceTheCounter = computed(() => counter.value * 2);
counter.value = 5;
console.log(`%ctwiceTheCounter = ${twiceTheCounter.value}`, "color: green;");
function getDataAsync(user) {
  return new Promise((resolve) => {
    resolve(user.split(''));
  });
}
export default {
  name: 'Child2',
  // mixins: [],
  // components: {},
  props: {
    user: {
      type: String
    }
  },
  /* 
    setup 返回的对象会被注入到当前组件实例，可以在其他的api访问到
  */
  setup(props) {
    console.log(props);
    console.log(props.user);

    // 利用 toRefs 对props的user属性创造一个响应式对象
    const { user } = toRefs(props);

    const list = ref([]);
    const getList = async () => {
      console.log('onMounted');
      // 利用user作为参数
      list.value = await getDataAsync(user.value);
    };
    watch(user, getList);
    onBeforeMount(function () {
      console.log('%conBeforeMount', 'color: red');
    });
    // 注册生命周期钩子
    onMounted(getList);

    return {
      x: 1,
      list,
      getList
    };
  },

  data() {
    return {};
  },
  // computed: {},
  /* watch: {
    user(newVal, oldVal) {
      this.getList();
    }
  }, */
  created() {
    // this.getList();
  },
  mounted() {
    console.log('mounted');
  }
  // beforeDestory() {},
  // destoryed() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
