<template>
  <div>
    <h1>provider/inject</h1>
    <div>
      <xd-child></xd-child>
    </div>
    <p>greet: {{greet}}</p>
  </div>
</template>
<script lang="ts">
import Component, { Options, Vue } from 'vue-class-component';
import { Provide, ProvideReactive } from 'vue-property-decorator';
// import  from '@/components/ .vue'
import Child from '@/components/Child.vue';
export const injectKey = Symbol();

@Options({
  name: 'ProviderInject',
  props: {},
  components: {
    'xd-child': Child
  }
  /*  provide() {
    return {
      greet: 'Vue3 hello',
      listLength: this.list.length
    };
  } */
})
export default class ProviderInject extends Vue {
  @Provide('greet') greet = 'Vue3 hello';
  @Provide('listLength') listLength = 2;
  @ProvideReactive('foo') foo: any = { x: 2 };
  // @Prop(type)private propName = propValue;
  /* data */
  // private variableName: typeName = variableValue;
  private list: Array<string> = [];

  /* computed */
  /* wactch */
  /* life cycle */
  public created() {
    this.list.push('123');
    setTimeout(() => {
      this.list.push('456');
      this.foo = { x: 1 };
      this.greet = "update hello vue3"
    }, 2000);
  }
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
