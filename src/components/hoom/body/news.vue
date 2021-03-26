<template>
  <div class="news content">
      <h1>留学动态</h1>
      <h1 class="towH">小改变，大影响。</h1>
      <div class="news-content">
        <div v-for="item in 8" :key='item' class="back">
          <p v-if='[2, 4, 5, 7].indexOf(item) == -1'>
            英国留学兼职<br/>
            那些事儿<br/>
              <span>-></span>
          </p>
          <div v-if='[2, 4, 5, 7].indexOf(item) == -1'>
              如果可以找到与专业比较契合
              的而工作，对于将来毕业之后
              找工作也有很大的帮助。
          </div>
        </div>
      </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import logoImg from '@/assets/img/hoom/logo.png';
  export default defineComponent({
    name: 'News',
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
.news{
  &-content{
    background: #C4C4C4;
    margin-top: 30px;
    .back{
      display: inline-block;
      width: calc(25% - 40px);
      height: 180px;
      padding: 20px;
      color: #fff;
      overflow: hidden;
      &:nth-child(1){
        background: #73D6CB;
      }
      &:nth-child(3){
        background: #73D6CB;
      }
      &:nth-child(6){
        background: #E7BCE6;
      }
      &:nth-child(8){
        background: #E7BCE6;
      }
      p{
        font-size: 18px;
        font-family: FZLTHPro Global;
        font-weight: 600;
      }
      div{
        font-size: 12px;
        margin-top: 30px;
      }
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
