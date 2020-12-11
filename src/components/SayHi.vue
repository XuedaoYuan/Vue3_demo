<template>
  <div>Hi {{ name }}</div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import  from '@/components/ .vue'
@Options({
  name: "ComponentName",
  props: {
    name: String
  },
  components: {}
})
export default class ComponentName extends Vue {
  // @Prop(type)private propName = propValue;
  // private variableName: typeName = variableValue;
  // public methodName() {}
}
</script>
<style lang="stylus" scoped></style>
