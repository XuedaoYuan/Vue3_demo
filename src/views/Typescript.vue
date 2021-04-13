<template>
  <div>
    <child :name="'1'"
           :success="success"
           :bookA="{title: 'bookname'}"
           :bookB="{title: 'bookname'}"></child>
    <p>{{success}}</p>
    <child2></child2>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { Options, Vue } from 'vue-class-component';
import Child from '@/components/TS/Child.vue';
const Child2 = defineComponent({
  name: 'Child2',
  setup() {
    const year = ref<number | string>('');
    year.value = 2021;
    return () => h('div', {}, [year.value]);
  }
});
@Options({
  name: 'Typescript',
  //   props: {},
  components: {
    child: Child,
    child2: Child2
  }
})
export default class Typescript extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  private success = '成功';
  /* computed */
  /* wactch */
  /* life cycle */
  public created() {
    setTimeout(() => {
      this.success = '成功2222';
    }, 2000);
  }
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
