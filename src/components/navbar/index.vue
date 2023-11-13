<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li>
        <a href="" class="select-cars">选择车辆</a>
      </li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navnar"
}
</script>

<style lang="scss">
  .navbar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 86px;
    text-align: center;
    z-index: 10;
    li {
      display: inline-block;
      vertical-align: middle;
      margin: 0px 17px;
    }
    i {
      display: inline-block;
      cursor: pointer;
    }
    .select-cars {
      width: 240px;
      height: 86px;
      background-color: $color-main;
      border-radius: 100px;
      display: block;
      text-align: center;
      line-height: 86px;
      color: #fff;
      font-size: 26px;
      font-weight: 300;
    }
  }
</style>