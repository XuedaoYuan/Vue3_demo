<template>
  <div v-for="(item, i) in list" :key="i" :ref="el => {if(el) divs[i] = el }">
    <h1 @click="handleClick">TemplateReference</h1>
  </div>
  <div ref="root">root4</div>
</template>
<script>
import { ref, reactive, onBeforeUpdate, onMounted, watchEffect } from 'vue';
export default {
  name: 'TemplateReference',
  // mixins: [],
  // components: {},
  // props: {},
  setup() {
    const root = ref(null);
    const list = reactive([1, 2, 3]);
    const divs = ref([]);

    onBeforeUpdate(() => {
      divs.value = [];
    });

    onMounted(() => {
      //   console.log(root.value);
    });

    // 副作用
    watchEffect(
      () => {
        // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
        console.log(root.value);
      },
      {
        //    flush: 'post' 这将在 DOM 更新后运行副作用
        flush: 'post'
      }
    );

    return {
      root,
      list,
      divs
    };
  },
  // computed: {},
  // watch:{},
  // created() {},
  mounted() {
    // console.log(this.$refs['root']);
  },
  // beforeDestory() {},
  // destoryed() {},
  methods: {
    handleClick() {
      console.log(this.divs);
      this.divs[0].style.color = 'red';
    }
  }
};
</script>
<style lang='stylus' scoped></style>

