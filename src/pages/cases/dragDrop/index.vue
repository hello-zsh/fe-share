<template>
  <div class="drag-drop-wrapper">
    <div class="drop-wrapper">
      <div class="drop-item">所有({{data_AllItems.length}})</div>
      <div 
        class="drop-item"
        v-for="(item, index) in data_Groups"
        :key="index"
        :data-index="index"
        @dragover="allowDrop"
        @drop="drop"
        @click="handleClickGroup(item)"
      >{{item.name}}({{item.value.length}})</div>
      <div class="drop-item">未分组({{data_NoGroupItems.length}})</div>
    </div>
    <div class="drap-wrapper">
      <div 
        v-for="(item, index) in data_ShowItems"
        :key="index"
        class="drap-item"
        draggable="true"
        @dragstart="drag"
        :data-name="item"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_AllItems: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
      data_Groups: [
        {
          name: '分组一',
          value: []
        },
        {
          name: '分组二',
          value: []
        },
        {
          name: '分组三',
          value: []
        },
        {
          name: '分组四',
          value: []
        }
      ],
      data_ShowItems: [],
      data_NoGroupItems: [],
    }
  },
  mounted() {
    this.data_NoGroupItems = [].concat(this.data_AllItems);
    this.data_ShowItems = this.data_NoGroupItems;
  },
  methods: {
    allowDrop(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      const dragItem = event.dataTransfer.getData('name');
      const index = this.data_ShowItems.indexOf(dragItem);
      this.data_ShowItems.splice(index, 1);
      //添加到拖拽组
      this.data_Groups[event.target.dataset.index].value.push(dragItem);
    },
    drag(event) {
      event.dataTransfer.setData('name', event.target.dataset.name);
    },
    handleClickGroup(item) {
      this.data_ShowItems = item.value;
    } 
  }
}
</script>

<style lang="less" scoped>
.drag-drop-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px 20px 0;
  .drop-wrapper {
    width: 200px;
    .drop-item {
      width: 100%;
      height: 36px;
      line-height: 36px;
      cursor: pointer;
      border: 3px solid #ccc;
      margin-bottom: 10px;
    }
  }
  .drap-wrapper {
    margin-left: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: repeat(2, 200px);
    grid-gap: 20px 20px;
    justify-content: space-between;
    .drap-item {
      background-color: #ccc;
      text-align: center;
    }
  }
}
</style>
