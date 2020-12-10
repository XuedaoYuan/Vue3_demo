<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <div class="page_container">
    <router-view />
  </div>
</template>

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
