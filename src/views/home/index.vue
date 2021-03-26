<template>
  <div class="hoomLany" ref="hoomLanyRef" @mousewheel="scrollChange">
    <div :class="`top ${topShow ? 'type' : ''}`">
        <Navigation :type="topShow" :inputShow="inputShow"/>
    </div>
    <div class="carousel" id="carousel">
        <Carousel :inputShow="inputShow"/>
    </div>
    <div class="body">
        <Apartment id="apartment"/>
        <Choice id="choice"/>
        <City id="city"/>
        <News id="news"/>
        <ContactMe id="contactMe"/>
    </div>
    <div class="footer">

    </div>
    <div class="leftNav">
      <a @click="anchorFn('carousel')">YIHOME</a>
      <a @click="anchorFn('apartment')">热门公寓</a>
      <a @click="anchorFn('choice')">选择我们</a>
      <a @click="anchorFn('city')">热门城市</a>
      <a @click="anchorFn('news')">留学动态</a>
      <a @click="anchorFn('contactMe')">联系我们</a>

    </div>
    <div class="rightContact">
       
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, onMounted, ref, watch } from 'vue';
    import Carousel from "@/components/hoom/carousel/index.vue";
    import Navigation from "@/components/hoom/topNavigation/index.vue";
    import News from "@/components/hoom/body/news.vue";
    
    import Apartment from "@/components/hoom/body/apartment.vue";
    import City from "@/components/hoom/body/city.vue";
    import Choice from "@/components/hoom/body/choice.vue";
    import ContactMe from "@/components/hoom/body/contactMe.vue";
    import contactImg from "@/assets/img/hoom/contact.png";
    const bodyHeight = document.documentElement.offsetHeight;
  export default defineComponent({
    name: 'Login',
    components: {
      Carousel,
      Navigation,
      News,
      Apartment,
      City,
      Choice,
      ContactMe
    },
    setup() {
      const hoomLanyRef = ref<any>(null);
      const topShow = ref<boolean>(true);
      const inputShow = ref<boolean>(false);
      onMounted(() => {
        console.log(hoomLanyRef) // 打印一下，就可以获取dom了
      });
    
      const scrollChange = (e: any) =>{
        console.log(e.deltaY);
        if(hoomLanyRef.value.scrollTop > 60){
            topShow.value = false;
        } else {
            topShow.value = true;
        }
        if(hoomLanyRef.value.scrollTop > bodyHeight / 1.5){
          inputShow.value = true;
        } else {
          inputShow.value = false;
        }
      };
      const anchorFn = (name: string) => {
         document.getElementById(name).scrollIntoView();
        
         topShow.value = name == 'carousel';
         inputShow.value = name != 'carousel';
      };
      return {
        hoomLanyRef,
        scrollChange,
        topShow,
        contactImg,
        inputShow,
        anchorFn
      };
    },
  });
</script>
<style lang="scss">
.hoomLany{
  position: relative;
  scroll-behavior:smooth;
  height: 100vh;
  overflow: auto;
  background-color: rgba(245,245,245,1);
  transition: all 0.5s;
  .top{
    position: fixed;
    &.type{
      position: absolute;
    }
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
 .body{
   width: 70%;
   margin: 0 auto;
   
 }
 .leftNav{
   position: fixed;
   left: 0;
   bottom: 10%;
   width: 130px;
   min-height: 40px;
   padding: 20px 0;
   background-color: #3C46A6;
   color: #fff;
  a{
    display: block;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover{
      color: aquamarine
    }
  }
 }
 .rightContact{
    background-image: url('../../assets/img/hoom/contact.png');
    background-size: 100%;
    width: 70px;
    height: 210px;
    position: fixed;
    right: 0;
    bottom: 0;
    cursor: pointer;
    .div{
      height: 70px;
    }
 }
}
 </style>
