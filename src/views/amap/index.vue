<template>
  <div class="amap-wrap">
    <el-amap class="amap-box" :zoom="zoom" :events="events"></el-amap>
  </div>
</template>

<script>
// import {AMapManager} from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: "Amap", 
  data(){
    return {
      zoom: 12,
      map: null,
      events: {}
    }
  },
  mounted(){
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amap-wrap', {
        center: [116.395449,39.909519],
        zoom: this.zoom
      });
    });
  },
  methods: {
  
  }
};
</script>

<style lang="scss">
  .amap-wrap {
    height: 100vh;
  }
</style>
