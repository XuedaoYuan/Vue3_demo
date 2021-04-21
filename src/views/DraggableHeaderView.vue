<template>
  <div>ss
    <draggable-header>
      <template v-slot:header>
        <h1>Elastic Draggable SVG Header</h1>
        <p>
          with <a href="http://vuejs.org">Vue.js</a> +
          <a href="http://dynamicsjs.com">dynamics.js</a>
        </p>
      </template>
      <template v-slot:content>
        <p>
          Note this is just an effect demo - there are of course many
          additional details if you want to use this in production, e.g.
          handling responsive sizes, reload threshold and content scrolling.
          Those are out of scope for this quick little hack. However, the idea
          is that you can hide them as internal details of a Vue.js component
          and expose a simple Web-Component-like interface.
        </p>
      </template>
    </draggable-header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';
import DraggableHeader from '@/components/DraggableHeader.vue';
@Options({
  name: 'DraggableHeaderView',
  components: {
    'draggable-header': DraggableHeader
  }
})
export default class DraggableHeaderView extends Vue {
  data() {
    return {};
  }
  // ,created() {},
  // ,methods: {}
}
</script>
<style lang="stylus" scoped></style>
