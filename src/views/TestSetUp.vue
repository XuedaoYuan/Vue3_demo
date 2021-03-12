<template>
  <div>
    <h2>TestSetUp</h2>
    <input type="text" name="" v-model="user">
    <child2 :user="user"></child2>
    <p>user={{user}}</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
import Child2 from '@/components/Child2.vue';

@Options({
  name: 'TestSetUp',
  props: {},
  components: {
    child2: Child2
  }
})
export default class ComponentName extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  private user = 'user';
  /* computed */
  /* wactch */
  /* life cycle */
  // public created() {}
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
