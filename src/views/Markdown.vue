<template>
  <div id="editor">
    <textarea
      :value="input"
      @input="update"
    ></textarea>
    <div v-html="compiledMarkdown"></div>
    <!-- <div>{{compiledMarkdown}}</div> -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import marked from 'marked';
console.log(marked);
// import * as _ from 'lodash';
export default defineComponent({
  name: 'Markdown',
  setup() {
    const input = ref('# 123');
    const compiledMarkdown = computed<string>(() => {
      const html: string = marked(input.value, { sanitize: true }) as string;
      return html;
      //   return input.value;
    });
    return {
      input,
      compiledMarkdown
    };
  },
  // ,created() {},
  methods: {
    update(e: any) {
      this.input = e.target.value;
    }
  }
});
</script>
<style>
#editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
