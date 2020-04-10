<template>
  <div class="grid-layout">
    <div 
      v-for="n in 6" 
      :key="n"
      class="grid-item"
    >{{n}}</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.grid-layout {
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 20px 20px;
  justify-content: space-between;
  .grid-item {
    border: 1px solid #000;
  }
}
</style>