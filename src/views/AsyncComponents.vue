<template>
  <div>
    <h1>AsyncComponents</h1>
    <div>
      <async-component></async-component>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
import { defineAsyncComponent } from 'vue';

/* const asyncComponent: any = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    resolve({
    //   template: '<div>I am async!</div>'
      render: (h: any) =>
        h(
          'div',
          {
            style: { color: 'red' }
          },
          [h('span', {}, 'asyncComponent')]
        )
    });
  });
}); */

@Options({
  name: 'AsyncComponents',
  props: {},
  components: {
    'async-component': defineAsyncComponent(
      () => import('@/components/Child.vue')
    )
  }
})
export default class ComponentName extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  // private variableName: typeName = variableValue;
  /* computed */
  /* wactch */
  /* life cycle */
  // public created() {}
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
