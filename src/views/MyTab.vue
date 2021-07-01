<template>
  <div>
    <h2>my tab</h2>
    <van-tabs v-model="activeTab">
      <van-tab title="tab1" name="1"></van-tab>
      <van-tab title="tab2" name="2"></van-tab>
      <van-tab title="tab3" name="3"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
// import {} from 'vue'
import Tabs from '@/views/components/Tabs.vue';
import Tab from '@/views/components/Tab.vue';
export default {
  name: 'MyTab',
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab
  },
  // props: {},
  setup() {
    return {};
  },
  data() {
    return {
      activeTab: '1'
    };
  }
  // created() {},
  // ,methods: {}
};
</script>
<style lang='stylus' scoped></style>
