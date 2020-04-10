<template>
  <div class="new-function-wrapper">
    <Input
      v-model="data_Function"
      type="textarea" 
      :rows="10" 
      style="width: 500px;"
    />
    <Button @click="test">转换</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_Function: '',
    }
  },
  methods: {
    test() {
      const data = [
        {
          x: '1',
          y: '1'
        }
      ];
      const func = new Function(this.data_Function);
    }
  }
}
</script>

<style scoped>
.new-function-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: top;
}
</style>