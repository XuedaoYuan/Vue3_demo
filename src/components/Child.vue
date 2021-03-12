<template>
  <div>{{greet}}--{{listLength}}

    <p>listLength:::{{listLength}}</p>
    <p>foo: {{foo}}</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
import { Inject, InjectReactive } from 'vue-property-decorator';
import { injectKey } from '@/views/ProviderInject.vue';
@Options({
  name: 'Child',
  props: {},
  components: {}
})
export default class Child extends Vue {
  @Inject('greet') readonly greet!: string;
  @Inject('listLength') readonly listLength!: number;
  @InjectReactive('foo') readonly foo!: any;
  // @Prop(type)private propName = propValue;
  /* data */
  // private variableName: typeName = variableValue;
  /* computed */
  /* wactch */
  /* life cycle */
  public created() {
    // console.log(this.greet);
  }
  /* methods */
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
