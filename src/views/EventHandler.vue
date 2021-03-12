<template>
  <div>
    <h1>EventHandler</h1>
    <button @click="one($event),two($event)">btn</button>
    <button @click.middle="one($event)">mouse left</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
@Options({
  name: 'EventHandler',
  props: {},
  components: {}
})
export default class EventHandler extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  // private variableName: typeName = variableValue;
  /* computed */
  /* wactch */
  /* life cycle */
  // public created() {}
  /* methods */
  public one(event: MouseEvent) {
    console.log(event);
    const btn = event.target as HTMLButtonElement;
    console.log(btn);
  }
  public two(event: MouseEvent) {
    console.log(event);
  }
}
</script>
<style lang="stylus" scoped></style>
