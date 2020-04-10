<template>
  <div class="string-map-wrapper">
    <h3 class="title">字符串按规律转换</h3>
    <Input v-model="data_InputStr" style="width: 200px;"/>
    <Button @click="transfer">转换</Button>
    <p class="answer">转换之后的内容：{{data_TransferStr}}</p>
  </div>
</template>

<script>
export default {
  name: 'StringMap',
  data() {
    return {
      data_InputStr: '',
      data_TransferStr: '',
    }
  },
  created() {
    this.local_Keys = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
      'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
      'c', 'd', 'e', 'f', 'g', 'h', 'i', 
      'j', 'k', 'l', 'm', 'n', 'o', 'p', 
      'q', 'r', 's', 't', 'u', 'v', 'w', 
      'x', 'y', 'z', '0', '1', '2', '3',
      '4', '5', '6', '7', '8', '9'
    ];
    this.local_Values = [
      'b', 'c', 'd', 'e', 'f', 'g', 'h', 
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 
      'p', 'q', 'r', 's', 't', 'u', 'v', 
      'w', 'x', 'y', 'z', 'a', 'B', 'C', 
      'D', 'E', 'F', 'G', 'H', 'I', 'J', 
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 
      'Y', 'Z', 'A', '1', '2', '3', '4', 
      '5', '6', '7', '8', '9', '0'
    ];
  },
  methods: {
    transfer() {
      if(this.data_InputStr) {
        const newStr = [];
        for(let i = 0; i < this.data_InputStr.length; i++) {
          const keyIndex = this.local_Keys.indexOf(this.data_InputStr[i]);
          newStr.push(this.local_Values[keyIndex]);
        }
        this.data_TransferStr = newStr.join('');
      } 
      else {
        this.data_TransferStr = '' 
      }
    }
  }
}
</script>

<style lang="less" scoped>
.string-map-wrapper {
  margin: 100px;
  text-align: left;
  .title {
    margin-bottom: 10px;
  }
  .answer {
    margin-top: 20px;
  }
}
</style>