<template>
  <div>
    <canvas ref="canvas" style="margin-top: 60px;"></canvas>
    <h3>{{data_Message}}</h3>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      data_Message: '',
    }
  },
  mounted() {
    const ws = new WebSocket('ws://localhost:8888');
    ws.onopen = function () {
      console.log('open');
    }
    ws.onmessage = (event) => {
      if(event.data === 'Client') {
        ws.close();
        this.$router.push('/login');
      }
      // this.data_Message = event.data;
      // this.$router.push({
      //   path: `/screen/${event.data}`
      // })
    };
    this.createQrc();
  },
  methods: {
    createQrc() {
      const url = 'http://10.11.30.223:8080/#/login'
      QRCode.toCanvas(this.$refs.canvas, url, (error) => {
        if (error) {
          console.log(error)
        } else {
          console.log('success')
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>