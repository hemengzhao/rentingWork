<template>
  <div class="choice content">
      <h1>热门城市</h1>
      <h1>Recommend City</h1>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import logoImg from '@/assets/img/hoom/logo.png';
  export default defineComponent({
    name: 'City',
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
