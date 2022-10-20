<template>
  <div id="app" class="app-container">
    <keep-alive :include="cachePages">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    ...mapState(['cachePages'])
  }
}
</script>
<style lang="less">
.app-container{
  height: 100%;
}
</style>
