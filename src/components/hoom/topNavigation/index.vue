<template>
  <div :class="`nav ${type ? 'show' : ''}`">
      <img :src='logoImg'/>
      <div class="search">
        <el-input
          v-if="inputShow"
          style="width: 100%"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input">
        </el-input>
      </div>
     <div class="rBack">
       <span>首页</span>
       <span>立即找房</span>
       <span>预定流程</span>
       <span>房型介绍</span>
       <span>留学动态</span>
     </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import logoImg from '@/assets/img/hoom/logo.png';
  export default defineComponent({
    name: 'Navigation',
    components: {
      
    },
    props: {
        type: {
          type: Boolean,
          default: false,
        },
        inputShow: {
          typp: Boolean,
          default: false
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
.nav{
    width: 70%;
    min-width: 1000px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15%;
    background: rgba(255, 255, 255, 0.8);
    &.show{
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
    }
    img{
      width: 50px;
      height: 50px;
    }
    .search{
      width: 40%;
      max-width: 400px;
    }
    .rBack{
      span{
        display: inline-block;
        padding: 0 5px;
        margin: 0 10px;
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
            border-color: #fff;
          }
        }
      }
    }
 </style>
