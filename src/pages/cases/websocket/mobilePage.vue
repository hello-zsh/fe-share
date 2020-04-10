<template>
  <div>
    <Button @click="generateId">Button1</Button>
    <Button @click="generateId">Button2</Button>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  created() {
    this.IsOpen = false;
  },
  data() {
    return {
      data_Id: ''
    }
  },
  mounted() {
    this.ws = new WebSocket('ws://10.11.30.223:8888');
    this.ws.onopen = () => {
      this.IsOpen = true;
    }
  },
  methods: {
    generateId() {
      if(this.IsOpen) {
        const id = uuidv4();
        this.data_Id = id;
        this.ws.send(id);
      } 
    }
  }
}
</script>

<style lang="less" scoped>

</style>