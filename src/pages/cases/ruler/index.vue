<template>
  <div class="ruler-wrapper">
    <div class="rule-top" ref="topRule"></div>
    <div class="rule-left" ref="leftRule"></div>
    <div class="rule-cross"></div>
    <div class="canvas-box"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    this.drawTopRule(this.$refs.topRule);
    this.drawLeftRule(this.$refs.leftRule);
  },
  methods: {
    drawTopRule(container) {
      const { clientWidth, clientHeight } = container;
      const ruleContainer = d3.select(container);
      const svg = ruleContainer
      .append('svg')
      .attr("width", clientWidth)
      .attr("height", clientHeight);
      const linear = d3.scaleLinear()
                    .domain([-200, 1000])
                    .range([0, clientWidth]);
      //显示label的坐标
      const xAxis1 = d3.axisTop(linear)
                    .ticks(11)
                    .tickSizeInner(10);
      const xAxisGroup1 = svg.append('g')
                          .style('transform', `translateY(${clientHeight - 1}px)`)
                          .call(xAxis1);
      xAxisGroup1.selectAll('text').style('fill', '#fff');
      xAxisGroup1.selectAll('line').style('stroke', '#fff');
      //小刻度坐标                    
      const xAxis2 = d3.axisTop(linear)
                    .ticks(100)
                    .tickSizeInner(5);
      const xAxisGroup2 = svg.append('g')
                          .style('transform', `translateY(${clientHeight - 1}px)`)
                          .call(xAxis2);      
      xAxisGroup2.selectAll('text')
                  .style('fill', 'none'); 
      xAxisGroup2.selectAll('line').style('stroke', '#fff');
      xAxisGroup2.selectAll('path').style('stroke', '#fff');
        
    },
    drawLeftRule(container, minDomain, maxDomain) {
      const { clientWidth, clientHeight } = container;
      const ruleContainer = d3.select(container);
      const svg = ruleContainer
      .append('svg')
      .attr("width", clientWidth)
      .attr("height", clientHeight);
      const linear = d3.scaleLinear()
                    .domain([-200, 1000])
                    .range([0, clientHeight]);
      //显示label的坐标
      const xAxis1 = d3.axisLeft(linear)
                    .ticks(11)
                    .tickSizeInner(10);
      const xAxisGroup1 = svg.append('g')
                          .style('transform', `translateX(${clientWidth - 1}px)`)
                          .call(xAxis1);
      xAxisGroup1.selectAll('text').style('fill', '#fff');
      xAxisGroup1.selectAll('line').style('stroke', '#fff');
      //小刻度坐标                    
      const xAxis2 = d3.axisLeft(linear)
                    .ticks(100)
                    .tickSizeInner(5);
      const xAxisGroup2 = svg.append('g')
                          .style('transform', `translateX(${clientWidth - 1}px)`)
                          .call(xAxis2);      
      xAxisGroup2.selectAll('text').style('fill', 'none');
      xAxisGroup2.selectAll('line').style('stroke', '#fff');
      xAxisGroup2.selectAll('path').style('stroke', '#fff');
    }
  }
}
</script>

<style lang="less" scoped>
.ruler-wrapper {
  width: 100vw;
  height: 100vh;
  padding: 0 200px;
  background-color: #000;
  .rule-top {
    position: absolute;
    height: 40px;
    top: 0;
    left: 200px;
    right: 200px;
  }
  .rule-left {
    position: absolute;
    width: 40px;
    top: 0;
    left: 200px;
    bottom: 0;
  } 
  .rule-cross {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #000;
    top: 0;
    left: 200px;
  }
  .canvas-box {
    position: absolute;
    width: 480px;
    height: 270px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
}
</style>