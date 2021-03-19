<template>
  <button @click="openModal = true">
    Open full screen modal! {{openModal}}
  </button>
  <teleport to="body">
    <div v-if="openModal" class="modal">
      <div>
        I'm a modal!
        <button @click="openModal = false">
          Close
        </button>
      </div>
    </div>
  </teleport>

</template>
<script>
import { ref } from 'vue';
export default {
  name: 'ModalButton',
  // components: {},
  // props: {},
  setup() {
    const openModal = ref(false);
    return {
      openModal
    };
  },
  created() {
    console.log(this.openModal);
  }
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
