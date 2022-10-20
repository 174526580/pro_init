<template>
  <div class="login-container">
    <img src="@/assets/login_bg.png" alt="" class="banner" />
    <img src="@/assets/logo.png" alt="" class="logo" />
    <div class="title">传媒中心智慧管理系统</div>
    <van-form v-if="showFrom" :show-error="false" :show-error-message="false" validate-first ref="login-from"
      @submit="onLogin" @failed="onFailed">
      <van-field class="file" v-model="user.username" placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]">
        <div slot="label">
          <img src="@/assets/user.png" class="login-icon" />
        </div>
      </van-field>
      <van-field class="file" v-model="user.password" :type="passwordType" placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]">
        <div slot="label">
          <img src="@/assets/pass.png" class="login-icon" />
        </div>
        <!-- <div slot="right-icon">
          <img src="@/assets/see.png" class="login-see" @click="OnSee" />
        </div> -->
      </van-field>
      <div style="margin: 42px">
        <van-button block native-type="submit" class="submit-btn">登录</van-button>
      </div>
      <img src="@/assets/bottom.png" alt="" class="bottom" />
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
//import * as dt from 'dingtalk-jsapi'
// import dd from 'gdt-jsapi'
import md5 from 'js-md5'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        username: '',
        password: '',
        accountId: 0
      },
      passwordType: 'password',
      auth_code: '',
      code: '',
      showFrom: true
    }
  },
  computed: {},

  watch: {},

  created() {
    // this.onLoad()
  },

  mounted() { },

  methods: {
    //登录
    // onLoad() {
    //   const that = this
    //   // try {
    //   dd.ready(function () {
    //     // dd.getAuthCode('50243251').then(async (result) => {
    //     dd.getAuthCode('196729')
    //       .then(async (result) => {
    //         if (result) {
    //           const auth_code = result.code ? result.code : result.auth_code
    //           if (auth_code) {
    //             that.$toast.loading({
    //               message: '登录中...', // 提示文本
    //               forbidClick: true, // 禁止背景点击
    //               duration: 0 // 展示时长（ms），值为0时Toast不会消失
    //             })
    //             const { data } = await dingLogin({ auth_code: auth_code })
    //             if (data.status === 0) {
    //               that.$store.commit('setUser', data.data)
    //               //跳转回原来页面
    //               that.$router.push('/')
    //               that.$toast.success('登录成功')
    //             } else if (data.status === 1) {
    //               that.$toast.fail(data.info)
    //               that.user.accountId = data.data.accountId
    //               that.showFrom = true
    //             } else {
    //               that.$toast.fail(data.info)
    //               that.showFrom = true
    //             }
    //           }
    //         }
    //       })
    //       .catch((error) => {
    //         that.showFrom = true
    //       })
    //   })
    //   // } catch (error) {
    //   //   //that.showFrom = true
    //   // }
    // },
    // 登录/注册
    async onLogin() {
      this.$toast.loading({
        message: '登录中...', // 提示文本
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长（ms），值为0时Toast不会消失
      })
      const { data } = await login({ accountId: this.user.accountId, username: this.user.username, password: md5(this.user.password) })
      if (data.status === 0) {
        this.$store.commit('setUser', data.data)
        //跳转回原来页面
        this.$router.push(this.$route.query.redirect || '/index')
        this.$toast.success('登录成功')

        // this.$notify({ type: 'success', message: '登录成功' })
      } else {
        this.$toast.fail('登录失败!' + data.info)
        // this.$toast.clear()
        // this.$notify({ type: 'warning', message: data.info })
      }
    },
    //表单验证
    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
        // this.$notify({ type: 'warning', message: error.errors[0].message })
      }
    },
    OnSee() {
      this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
    }
  }
}
</script>
<style lang='less' scoped>
.login-container {
  background: #ffffff;
  height: 100%;

  .banner {
    width: 100%;
    height: 266px;
  }

  .logo {
    width: 161px;
    height: 126px;
    position: fixed;
    top: 65px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .title {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    width: 250px;
    top: 200px;
    height: 20px;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 50px;
  }

  .bottom {
    width: 375px;
    height: 271px;
  }

  /deep/.van-form {
    position: fixed;
    top: 280px;
    overflow-y: auto;
    left: 0;
    right: 0;

    .van-field__label {
      width: 50px;
      text-align: center;
    }

    .file {
      left: 50%;
      transform: translate(-50%, 0);
      margin-bottom: 17px;
      width: 310px;
      height: 47px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
    }

    .login-icon {
      width: 18px;
      height: 18px;
    }

    .login-see {
      width: 22px;
      height: 14px;
    }

    .submit-btn {
      width: 311px;
      height: 50px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 50px;
      background: url('../../assets/button.png') no-repeat top center;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>