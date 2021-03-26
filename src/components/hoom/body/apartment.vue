<template>
  <div class="apartment content">
      <h1>热门公寓</h1>
      <h1 class="towH">多数的选择，舒适的住所。</h1>
      <div class="apartment-type">
        <div>
            <p class="animationBackColor">
              <span >伦敦</span>
            </p>
            <p class="animationBackColor">
              <span >伦敦</span>
            </p>
            <p class="animationBackColor">
              <span >伦敦</span>
            </p>
            <p class="animationBackColor">
              <span >伦敦</span>
            </p>
            <span>更多城市</span>
        </div>
        <div class="r-switch">
            <i class="el-icon-back"></i>
            <i class="el-icon-right"></i>
        </div>
      </div>
      <div class="apartment-list">
          <div class="back" v-for="item in 10" :key='item'>
              <div class="img">
                <img :src='apartmentlistImg'/>
              </div>
              <div class="price">£<span class="num">154.24</span><span class="str">起/周</span></div>
              <p class="name">Stratford ONE, London</p>
              <p class="introduce">
                  前往曼彻斯特都会大学-步行8分钟<br/>
                  前往曼彻斯特大学-步行8分钟
                </p>
          </div>
      </div>
      <div class="more">
        <i style="background: #73D6CB"></i>
        <i style="background: #E7BCE6"></i>
        <span>查看其它公寓 ></span>
        
      </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import logoImg from '@/assets/img/hoom/logo.png';
  import apartmentlistImg from '@/assets/img/hoom/apartmentlist.jpg';
  
  import UAnimaBack from "@/uiSub/UI_Animation/back.vue";
  export default defineComponent({
    name: 'Apartment',
    components: {
      UAnimaBack
    },
    props: {
        type: {
          type: Boolean,
          default: false,
        }
    },
    setup() {
        const input = ref<string>('');
      return {
        logoImg,
        input,
        apartmentlistImg
      };
    },
  });
</script>
<style lang="scss" scoped>
 @import './index.scss';
.apartment{
  padding-top: 140px;
  &-type{
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 20px 0;
    p{
      height: 45px;
      width: 120px;
      display: inline-block;
      margin: 0;
      margin-right: 20px;
      border: 1px solid #8B8B8B;
      &:hover{
        border-color: transparent;
      }
    }
    span{
      position: absolute;
      z-index: 2;
      height: 45px;
      width: 120px;
      display: inline-block;
     
      cursor: pointer;
      text-align: center;
      line-height: 45px;

      // &.active, &:hover{
      //   background: #73D6CB;
      //   border-color: #73D6CB;
      // }
    }
    .r-switch{
          display: flex;
          align-items: flex-end;
    }
    i{
      cursor: pointer;
      margin: 0 20px;
    }
  }
  &-list{
    width: 100%;
    white-space:nowrap;
    overflow: auto;
    &::-webkit-scrollbar { width: 0 !important }
    -ms-overflow-style: none; 
    overflow: -moz-scrollbars-none;
    .back{
      width: calc(33.33% - 20px);
      max-width: 445px;
      height: 440px;
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      &:hover{
        background: #73D6CB;
        .price{
           background: #fff;
        }
       
        .name, .introduce{
          border-color: #333333;
        }
      }
      .img{
           width: 100%;
          height: 240px;
          position: relative;
          overflow: hidden;
          margin-bottom: 10px;
          img{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 0.3s;
            &:hover{
              width: 120%;
              height: 120%;
              top: -10%;
              left: -10%;
            }
          }
      }
      
      .price{
        width: 190px;
        height: 40px;
        border: 2px solid #73D6CB;
        line-height: 44px;
        text-align: center;
        margin-left: 20px;
        color: #E95D5D;
        font-size: 12px;
        .num{
          font-size: 20px;
          color: #E95D5D;

        }
        .str{
          font-size: 14px;
          color: #8B8B8B;
        }
        
      }
      p{
        margin: 0;
         margin-left: 20px;
      }
      .name{
        font-size: 20px;
        color: #333333;
        margin-top: 20px;
        min-height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #E4E4E4;
      }
      .introduce{
        font-size: 18px;
        color: #333333;
        margin-top: 20px;
        min-height: 30px;
        line-height: 25px;
        border-bottom: 1px solid #E4E4E4;
        margin-bottom: 20px;
      }
    }
  }
  .more{
    padding-left: 20px;
    i{
      display: inline-block;
      width: 16px;
      height: 16px;

    }
    span{
      display: inline-block;
      padding-left: 20px;
      font-size: 14px;
      font-family: FZLTHPro Global;
      font-weight: 600;
      line-height: 16px;
      color: #333333;
      cursor: pointer;
    }
  }
}
 </style>

 <style lang="scss">
    .nav{
      .search{
        input{
          width: 100%;
          border-radius: 20px;
          background-color: rgb(222, 222, 222);
          color: #555;
          &:focus{
            border: none;
          }
        }
      }
    }
 </style>
