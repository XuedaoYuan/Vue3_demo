<template>
  <div>
    {{ dataDemo }}
    <pre>
      `private dataDemo = "data 选项";`
    </pre>
    <p :style="{color: 'red'}">
      {{dataOption}}
    </p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
@Options({
  name: 'DataProperty',
  props: {},
  data() {
    return {
      dataOption: 'dataOption'
    };
  },
  components: {}
})
export default class DataProperty extends Vue {
  // @Prop(type)private propName = propValue;
  private dataDemo = 'data  选项';
  // private variableName: typeName = variableValue;
  // public methodName() {}
  public mounted() {
    console.log(1);
  }
}
</script>
<style lang="stylus" scoped></style>
