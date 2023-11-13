<template>
  <div class="index-cars">
    <div class="car-item">
      <div class="header">
        <div class="logo">
          <img src="../../assets/images/car-list/car-logo.png" alt="Mustang 2019款">
          <p>Mustang 2019款</p>
        </div>
        <div class="car-type">
          <span>新能源汽车 5座</span>
        </div>
      </div>
      <div class="wrap">
        <img src="../../assets/images/car-list/car.png" alt="che">
        <div class="info">
          <div>
            <h4 class="car-number">粤T HN369</h4>
            <div>
              <ul class="dian active-li-6">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <sub>约</sub>
              <strong>
                600
              </strong>
              <sub>KM</sub>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="#" class="parking">某某停车场</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data(){
    return {

    }
  },
  methods: {
    goUser(){
      this.$router.push({
        name: 'User'
      })
    }
  }
}
</script>

<style lang="scss">
  .index-cars {
    position: fixed;
    bottom: 90px;
    left: 0px;
    right: 0px;
    z-index: 11;
    .car-item {
      width: 505px;
      height: 257px;
      padding: 30px 30px 0;
      margin: auto;
      background-color: #fff;
      border-radius: 24px;
      @include webkit(box-shadow,0 0 18px rgba(0,0,0,.2));
      @include webkit(box-sizing,border-box);
      .header {
        display: flex;
        flex-shrink: 0;
      }
    }
    .logo {
      flex: 1;
      img {
        display: inline-block;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        vertical-align: middle;
        margin-left: 16px;
      }
    }
    .car-type{
      flex: 1;
      text-align: right;
      color: #c5c6c7;
    }
    .wrap {
      text-align: right;
      position: relative;
      img {
        display: inline-block;
        height: 120px;
      }
      .info {
        display: flex;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        // background-color: red;
        align-items: center;
        .car-number{
          font-size: 18px; 
          text-align: left;
        }
        .dian {
          display: inline-block;
          text-align: bottom;
          margin-top: 15px;
          li {
            display: inline-block;
            width: 7px;
            height: 24px;
            margin-right: 3px;
            background-color: #e1e1e1;
            border-radius: 100px;
          }
          @for $i from 1 through 10 {
            &.active-li-#{$i}{
              li:nth-child(-n+#{$i}){
                @include webkitA(background,linear-gradient(#17a8fa,#108dd9))
              }
            }
          }
        }
        .distance{
          display: inline-block; 
          strong {
            font-size: 20px;
            margin: 0 3px;
          }
          sub {
            position: relative;
            top: -2px; 
          }
          sub:first-child {
            opacity: .8;
          }
        }
      }
    }
    .parking{
      position: relative;
      display: block;
      border-top: 1px solid #e1e1e1;
      line-height: 53px;
      color: $color-main;
      opacity: .8;
      &::after {
        content: "";
        position: absolute;
        right: 0px;
        height: 8px;
        width: 8px;
        top: 50%;
        margin-top: -8px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        opacity: .5;
        @include webkit(transform, rotate(45deg))

      }
    }
  }
</style>