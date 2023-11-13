<template>
  <div>
    <!-- 汽车列表-->
    <!-- <User /> -->
    <Cars />
    <Map /> 
    <Navbar />
    <!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
    <div id="children-view" :class="{open: show}">
      <router-view></router-view>
    </div>
  </div>
</template>``

<script>
import Map from '../amap/index.vue';
import Cars from '../cars/index.vue';
import Navbar from '@c/navbar/index.vue'
export default {
  name: "Index", 
  components: { Map, Cars, Navbar},
  data(){
    return {
      // show: false
    }
  },
  computed: {
    show(){
      const router = this.$route;
      console.log(router);
      return router.name === 'User' ? true : false 
    }
  },
  watch: {
    // "$route": {
    //   handler(newvalue){
    //     console.log(newvalue);
    //     const routerName = newvalue.name;
    //     this.show = routerName === 'User' ? true : false
    //   }
    // }
  },
  mounted(){
    // console.log(this.$router);
  },
  methods: {
  
  } 
};
</script>

<style lang="scss">
  #children-view {
    position: fixed;
    right: -410px; 
    top: 0px;
    bottom: 0px;
    width: 410px;
    z-index: 101;
    background-color: #34393f; 
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    &.open {
       right: 0px; 
    }
  }
</style>
