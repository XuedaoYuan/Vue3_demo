<template>
  <div>
    <anchored-heading :level="2">xxxxxx</anchored-heading>
    <anchored-heading2 :level="1">
      <span>asdasdasd</span>
      <template v-slot:title>
        <span>title</span>
      </template>
    </anchored-heading2>
    <anchored-heading3 :level="1">
        <span>1111</span>
        <span>22-333-4444</span>
        5555
    </anchored-heading3>
  </div>
</template>
<script>
import { h, toRef, defineAsyncComponent } from 'vue';
/** Recursively get text from children nodes */
function getChildrenTextContent(children) {
  return children
    .map((node) => {
      return typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : '';
    })
    .join('');
}
const AnchoredHeading = {
  name: 'AnchoredHeading',
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  created() {
    console.log('created');
  },
  render() {
    console.log('render');
    return h('h' + this.level, {}, this.$slots.default());
  },
  /* setup(props) {
    console.log('setup');
    const level = toRef(props, 'level');
    return h('h' + level.value, {}, 'xxx');
  }, */
  mounted() {
    console.log('mounted');
  }
};

const AnchoredHeading3 = {
  name: 'AnchoredHeading3',
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render() {
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, '-') // replace non-word characters with dash
      .replace(/(^-|-$)/g, ''); // remove leading and trailing dashes

    return h('h' + this.level, [
      h(
        'a',
        {
          name: headingId,
          href: '#' + headingId
        },
        this.$slots.default()
      )
    ]);
  }
};
export default {
  name: 'RenderFunction',
  components: {
    'anchored-heading': AnchoredHeading,
    'anchored-heading3': AnchoredHeading3,
    'anchored-heading2': defineAsyncComponent(() =>
      import('@/components/AnchoredHeading.vue')
    )
  },
  props: {},
  setup() {
    return {};
  }

  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
