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
    <my-input v-model="myValue"></my-input>
    <div>myValue: {{myValue}}</div>
    <p>{{x}}</p>
    <my-checkbox v-model="check"
                 @change="onCheckboxChange"></my-checkbox>
    <p>{{check}}</p>
    <p>{{$translate("greeting.hi")}}</p>
  </div>
</template>
<script>
import { h, toRef, ref, defineAsyncComponent } from 'vue';
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

const MyInput = {
  name: 'MyInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  render() {
    return h(
      'div',
      {
        // modelValue: this.modelValue
        // 'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value)
      },
      [
        h('input', {
          value: this.modelValue,
          onInput: (event) =>
            this.$emit('update:modelValue', event.target.value)
        }),
        h(
          'button',
          {
            onClick: this.onClick
          },
          'click me'
        )
      ]
    );
  },
  methods: {
    onClick(event) {
      console.log('click', event);
    }
  }
};

const MyCheckbox = {
  name: 'MyCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  render() {
    return h('div', {}, [
      h('input', {
        type: 'checkbox',
        checked: this.modelValue,
        onChange: this.onChange
      })
    ]);
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.checked);
      this.$emit('change', event.target.checked);
    }
  }
};

export default {
  name: 'RenderFunction',
  components: {
    'anchored-heading': AnchoredHeading,
    'anchored-heading3': AnchoredHeading3,
    'anchored-heading2': defineAsyncComponent(() =>
      import('@/components/AnchoredHeading.vue')
    ),
    'my-input': MyInput,
    'my-checkbox': defineAsyncComponent(() => Promise.resolve(MyCheckbox))
  },
  props: {},
  data() {
    return {
      x: 1,
      myValue: 'ss',
      check: true
    };
  },
  /* setup() {
    const myValue = ref('');
    myValue.value = 'sss';
    return {
      myValue
    };
  } */

  // created() {},
  methods: {
    onUpdate(value) {
      console.log(value);
    },
    onCheckboxChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang='stylus' scoped></style>
