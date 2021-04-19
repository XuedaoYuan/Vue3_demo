<template>
  <div>
    <input type="text"
           v-model="text">
    <p>{{text}}</p>
    <p>plusOne = {{plusOne}}</p>
    <p>plusTwo = {{plusTwo}}</p>
  </div>
</template>
<script lang="ts">
import { computed, customRef, defineComponent, ref, Ref } from 'vue';
function useDebounceRef(value: string, delay = 200) {
  let timer: number | undefined;
  return customRef((track: () => void, trigger: () => void) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}
export default defineComponent({
  name: 'CustomRef',
  setup() {
    const text = useDebounceRef('');

    const count = ref(0);
    const plusOne = computed(() => count.value + 1);
    // function computed<T>(getter: () => T): Readonly<Ref<Readonly<T>>>
    const plusTwo: Ref = computed<number>({
      get() {
        return count.value + 2;
      },
      set(val) {
        count.value = val - 2;
      }
    });
    setTimeout(() => {
      count.value++;
      plusTwo.value = 10;
    }, 1000);

    return { text, plusOne, plusTwo };
  }
  // ,created() {},
  // ,methods: {}
});
</script>
<style lang="stylus" scoped></style>
