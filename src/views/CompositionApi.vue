<template>
  <div>
    <h1>CompositionApi</h1>
    <p>name: {{name}}</p>
    <p>helloName: {{helloName}}</p>
    <button @click="onClick">click</button>
    <ul>
      <li v-for="i in list" :key="i">{{i}}</li>
    </ul>
    <hr>
    <child3 :child-name="name" data-key="123" type="span" @click="handleClick">
      <template v-slot:title>
        <h1>title</h1>
      </template>
    </child3>
    <hr>
    <div>book: {{book.title}}</div>
    <hr>
    <child4 title="asdasdas">
      <template v-slot:title>
        <span>title</span>
      </template>
    </child4>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  watch,
  onMounted,
  computed,
  defineAsyncComponent,
  provide
} from 'vue';

// 返回的list也可以是响应式的
function getDataList() {
  const list = ref([]);
  for (let i = 0, len = 5; i < len; i++) {
    list.value.push(i);
  }
  return {
    list
  };
}

export default {
  name: 'CompositionApi',
  // mixins: [],
  components: {
    child3: defineAsyncComponent(() => import('@/components/Child3.vue')),
    child4: defineAsyncComponent(() => import('@/components/Child4.vue'))
  },
  // props: {},
  /* data() {
    return {};
  } */
  setup(props) {
    const name = ref('');
    name.value = 'xdyuan';

    provide('userLocation', 'north pole');

    watch(name, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    name.value = 'xdyuan2';

    const helloName = computed(() => `hello ${name.value}`);

    const { list } = getDataList();

    const book = reactive({ title: 'vue 3 guide' });

    onMounted(() => {
      console.log(name.value, 'mounted');
      name.value = 'xdyuan mouted';
    });

    return {
      name,
      helloName,
      list,
      book
    };
  },
  // computed: {},
  // watch:{},
  // created() {},
  // mounted() {},
  // beforeDestory() {},
  // destoryed() {},
  methods: {
    onClick() {
      console.log(this.name);
      this.name = 'ssss';
      this.list.push(this.list.length);
      this.book.title = 'VUE 3 GUIDE';
    },
    handleClick() {
      console.log('click');
    }
  }
};
</script>
<style lang='stylus' scoped></style>
