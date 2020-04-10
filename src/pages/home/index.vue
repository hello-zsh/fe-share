<template>
  <div class="home-wrapper">
    <ul class="menu-list">
      <li 
        class="menu-item"
        v-for="(item, index) in local_MenuList"
        :key="index"
        @click="handleMenuClick(item.link)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.local_MenuList = [
      {
        name: '字符串规律转换',
        link: '/map'
      },
      {
        name: 'Grid布局',
        link: '/grid'
      },
      {
        name: 'Drag and Drop',
        link: '/dragDrop'
      },
    ]
  },
  methods: {
    handleMenuClick(path) {
      this.$router.push({
        path,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.menu-list {
  margin: 100px;
  width: 200px;
  text-align: left;
  .menu-item {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>