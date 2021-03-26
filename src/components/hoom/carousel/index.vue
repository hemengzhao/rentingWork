<template>
  <div class="car">
    <div class="search">
    
          <div class="inputb">
              <transition name="slide-fade">
                <div v-if="!inputShow">
                  <img class="searchIco" :src="searchImg"/>
                  <el-input
                    style="font-size: 18px;"
                    placeholder=" 请输入城市/大学/房源名称"
                    v-model="input"
                    clearable>
                    </el-input>
                </div>
                
              </transition>
          </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw } from 'vue';
  import headerImg from '@/assets/img/hoom/carousel.jpg';
  import searchImg from '@/assets/img/hoom/search.png';
  export default defineComponent({
    name: 'Carousel',
    components: {
      
    },
    props: {
      inputShow: {
        typp: Boolean,
        default: false
      }
    },
    setup() {
        const input = ref<string>('');
        const show = ref<boolean>(false);
        const showFn = (value: boolean) => {
            show.value = value;
        }
      return {
        headerImg,
        searchImg,
        input,
        showFn,
        show
      };
    },
  });
</script>
<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from{
   transform: translateY(30vh);
   opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-30vh);
  opacity: 0;
}

.car{
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('../../../assets/img/hoom/carousel.jpg');
    background-size: 100% 100%;
    .search{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .inputb{
           width: 720px;
           height: 60px; 
           font-size: 20px;
           position: relative;
           .searchIco{
             position: absolute;
             width: 21px;
             height: 21px;
            top: 20px;
            z-index: 10;
            left: 20px;
           }
        }
    }
}

 </style>

 <style lang="scss">
    .search{
        .inputb{
           input{
               height: 60px;
               line-height: 60px;
               padding-left: 50px;
               border-radius: 8px;
               &:focus{
                border-color: #fff;
              }
           }
        }
    }
 </style>
