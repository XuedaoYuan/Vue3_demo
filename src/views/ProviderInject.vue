<template>
  <div>
    <h1>provider/inject</h1>
    <div>
      <xd-child></xd-child>
    </div>
    <p>greet: {{greet}}</p>
    <h1>child2</h1>
    <child2></child2>
  </div>
</template>
<script lang="ts">
import Component, { Options, Vue } from 'vue-class-component';
import { Provide, ProvideReactive } from 'vue-property-decorator';
// import  from '@/components/ .vue'
import Child from '@/components/Child.vue';
import {
  computed,
  ComputedRef,
  defineComponent,
  h,
  inject,
  InjectionKey,
  provide,
  ref,
  getCurrentInstance
} from 'vue';
export const injectKey = Symbol();
export const testKey: InjectionKey<string> = Symbol();
const Child3 = defineComponent({
  name: 'Child3',
  setup() {
    const text = inject<string>(testKey);
    console.log(text);
    return () =>
      h('div', { class: 'child3__container' }, [
        'child3',
        h('div', { style: { color: 'red' } }, text)
      ]);
  }
});
const Child2 = defineComponent({
  name: 'Child2',
  setup() {
    const text = ref<string>('child2-provide');
    provide(testKey, text.value);
    // console.log(getCurrentInstance());
    return () =>
      h('div', {}, [
        'child2',
        'p2',
        h('div', {}, h(Child3)),
        h(
          'button',
          {
            onClick: () => {
              text.value = 'new child2-provide';
            }
          },
          text.value
        )
      ]);
  }
});

@Options({
  name: 'ProviderInject',
  props: {},
  components: {
    'xd-child': Child,
    child2: Child2
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
      this.greet = 'update hello vue3';
    }, 2000);
  }
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
