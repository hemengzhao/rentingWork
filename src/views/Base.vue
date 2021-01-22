<template>
  <div>
    <div>
      <ul>
        <li v-for="ele in eleList" :key="ele.id">{{ ele.name }}</li>
      </ul>
      <button @click="addEle">添加</button>
    </div>
    <div>
      <ul>
        <li v-for="ele in dataObj.todoList" :key="ele.id">{{ ele.name }}</li>
      </ul>
      <button @click="addTodo">添加</button>
    </div>
    <p>通过计算属性computed，两个数组的长度是：{{ sum }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// ref
const eleList = ref([])
function addEle() {
  let len = eleList.value.length
  eleList.value.push({
    id: len,
    name: 'ref 自增' + len
  })
}

// reactive
const dataObj = reactive({
  todoList: []
})
function addTodo() {
  let len = dataObj.todoList.length
  dataObj.todoList.push({
    id: len,
    name: 'reactive 自增' + len
  })
}

// computed
let sum = computed(() => dataObj.todoList.length + eleList.value.length)
console.log('setup引用computed要.value：' + sum.value)

// watch
watch(
  eleList,
  (curVal, oldVal) => {
    console.log('监听器：', curVal, oldVal)
  },
  {
    deep: true
  }
)

// watchEffect
watchEffect(() => console.log('使用watchEffect监听', sum.value))

const route = useRoute() // 相当于 vue2 中的this.$route
const router = useRouter() // 相当于 vue2 中的this.$router
console.log('路由：', route, router)
</script>

<style lang="scss" scoped>
ul {
  overflow: hidden;
  li {
    list-style: none;
    float: left;
    margin-right: 10px;
  }
}
button {
  display: block;
}
</style>