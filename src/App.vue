<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/data-property">data属性</router-link>
    <router-link to="/event-handler">事件处理</router-link>
    <router-link to="/provider-inject">provider/inject</router-link>
    <router-link to="/async-components">async components</router-link>
    <router-link to="/setup">setup</router-link>
    <router-link to="/composition-api">composition-api</router-link>
    <router-link to="/template-reference">模板引用</router-link>
    <router-link to="/teleport">teleport</router-link>
    <router-link to="/render">render</router-link> -->

    <router-link v-for="route in routesList"
                 :key="route.name"
                 :to="route.path"
                 :class="{active: currentPathName === route.name}">{{route.meta && route.meta.title ? route.meta.title : route.name}}{{}}</router-link>
  </div>
  <div class="page_container">
    <router-view />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Component, { Options, Vue } from 'vue-class-component';
import { routes } from '@/router/index.ts';
import { RouteRecordRaw } from 'vue-router';
// import  from '@/components/ .vue'

@Options({
  name: 'App',
  props: {},
  components: {},
  watch: {
    $route(newRoute) {
      console.log(newRoute);
      this.currentPathName = newRoute.name;
    }
  }
})
export default class App extends Vue {
  // @Prop(type)private propName = propValue;
  /* data */
  private routesList: Array<RouteRecordRaw> = routes;
  private currentPathName: string = routes[0].name as string;
  /* computed */
  /* wactch */
  /* life cycle */
  public created() {}
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
  height: 100%;
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }

  a {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 1;
    padding: 13px 0;
    background-color: #ccc;
    cursor: pointer;
    border-bottom: 1px solid #aaa;
    transition: all 0.5s ease;

    &:hover, &.active {
      background-color: #aaa;
    }
  }
}
</style>
