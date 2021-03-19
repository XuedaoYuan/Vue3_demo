<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/data-property">data属性</router-link>
    <router-link to="/event-handler">事件处理</router-link>
    <router-link to="/provider-inject">provider/inject</router-link>
    <router-link to="/async-components">async components</router-link>
    <router-link to="/setup">setup</router-link>
    <router-link to="/composition-api">composition-api</router-link>
    <router-link to="/template-reference">模板引用</router-link>
    <router-link to="/teleport">teleport</router-link>
    <router-link to="/render">render</router-link>
  </div>
  <div class="page_container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
@Options({
  name: 'App',
  props: {},
  components: {}
})
export default class App extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  // private variableName: typeName = variableValue;
  /* computed */
  /* wactch */
  /* life cycle */
  // public created() {}
  /* methods */
  // public methodName() {}
}
</script>

<style lang="stylus">
#app {
  display: flex;

  .page_container {
    flex: 1;
    overflow: auto;
  }
}

#nav {
  flex: 0 0 180px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;

  a {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 1;
    padding: 13px 0;
    background-color: #ccc;
    cursor: pointer;
    border-bottom: 1px solid #aaa;

    &:hover {
      background-color: #aaa;
    }
  }
}
</style>
