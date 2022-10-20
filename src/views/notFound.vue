<template>
  <div class="not-found">
    <van-nav-bar
      title="功能暂未开放"
      class="app-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />
    <van-empty image="error" />
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {},
  props: {},
  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang='less' scoped>
.not-found {
  background: #fff;
  height: 100%;
}
</style>