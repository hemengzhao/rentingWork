<template>
  <div class="contactMe content">
      <div class="cooperation">
        <h1>合作伙伴</h1>
        <h1 class="towH">遍布世界的顶尖住宿提供商。</h1>
        <div class="company">
            <div v-for='item in 8' :key='item'></div>
        </div>
      </div>
      <div class="info">
        <div class="left">
          <h1>联系我们</h1>
          <p>中国上海宝山区呼兰西路19号2号楼206C</p>
          <p>service@inyihome.com</p>
        </div>
        <div class="rqcode">
          <div>
            <img/>
            <p>
                  微信扫码<br/>
                  添加公众号
            </p>
          </div>
          <div>
            <img/>
            <p>
                  微信扫码<br/>
                  添加公众号
            </p>
          </div>
        </div>
      </div>
      <div class="release">
        <div>发布你的房源</div>
      </div>
      <div class="spareNumber">
        Copyright 上海颖鸿网络科技有限公司 All Right Reserved 沪ICP备18002555号-1
      </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import logoImg from '@/assets/img/hoom/logo.png';
  export default defineComponent({
    name: 'ContactMe',
    components: {
      
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
        input
      };
    },
  });
</script>
<style lang="scss" scoped>
 @import './index.scss';
.contactMe{
  position: relative;
  // padding-top: 550px;
  width: 100vw;
  margin-left: -15vw;
  .cooperation{
    // position: absolute;
    // left:-15vw;
    top: 0;
    width: 70vw;
    padding: 40px 15vw;
    background: #73D6CB;
    .company{
      width: 100%;
      margin-top: 30px;
      div{
        display: inline-block;
        width: calc(25% - 10px);
        height: 150px;
        margin-right: 10px;
        margin-bottom: 10px;
        background: #fff;
      }
    }
  }
  .info{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    .left{
      flex: 1;
      h1{
        margin-bottom: 20px;
      }
      p{
        margin: 0;
        line-height: 30px;
      }
    }
    .rqcode{
      width: 250px;
      display: flex;
     justify-content: space-between;
      div{
        width: 100px;
        text-align: center;
        img{
          width: 90px;
          height: 90px;
          background: red;
        }
        p{
          padding-left: 10px;
          margin: 0;
          line-height: 20px;
          text-align: left;
          color: #333333;
          font-size: 12px;
          font-family: FZLTHPro Global;
          font-weight: 400;
        }
      }
    }
  }
  .release{
    padding: 20px;
    width: 70%;
    margin: 0 auto;
    div{
      width: 216px;
      height: 40px;
      background: #73D6CB;
      opacity: 1;
      line-height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 18px;
      font-family: FZLTHPro Global;
      font-weight: 600;
      color: #333333;
      cursor: pointer;
    }
  }
  .spareNumber{
    padding: 20px;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px solid #8B8B8B;
    font-size: 12px;
    font-family: FZLTHPro Global;
    font-weight: 400;
    line-height: 30px;
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
