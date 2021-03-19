<template>
  <div class="container">
    <modal-button></modal-button>
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from 'vue';

export default {
  name: 'TeleportStudy',
  components: {
    'modal-button': defineAsyncComponent(() =>
      import('@/components/ModalButton.vue')
    )
  },
  // props: {},
  setup() {
    return {};
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped>
.container {
  position: relative;
}
</style>
