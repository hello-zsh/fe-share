<template>
  <div class="login-wrapper">
    <div class="login-info">
      <div class="user-avator"></div>
      <h1 class="login-text">Welcome to Skye's space!</h1>
      <div class="login-btn" @click="goHome">
        Go on
        <Icon type="md-arrow-forward" color="#f5f5f7" size="24"/>
      </div>
    </div>
    <div class="login-mask"></div>
  </div>
</template>

<script>
export default {
  name: '',
  created() {
    this.ws = null;
    // this.IsOpen = false;
  },
  methods: {
    goHome() {
      this.ws = new WebSocket('ws://10.11.30.223:8888');
      this.ws.onopen = () => {
        // this.IsOpen = true;
        alert(111);
        this.ws.send('Client');
        this.$router.push({
          path: '/screen',
        })
      }
    },
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #f5f5f7;
  .login-info {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .user-avator {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid #f5f5f7;
      background-color: #fff;
      background-image: url('../../assets/img/avator.jpeg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .login-text {
      margin-top: 60px;
      font-size: 38px;
    }
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      width: 100px;
      height: 38px;
      border: 3px solid #f5f5f7;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .login-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9;
  }
}
</style>