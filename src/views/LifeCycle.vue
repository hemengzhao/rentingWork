<template>
  <div>
    <div>
      <ul v-for="ele in eleList" :key="ele.id">
        <li>{{ ele.name }}</li>
      </ul>
      <button @click="addEle">添加</button>
    </div>
    <div>
      <ul v-for="ele in todoList" :key="ele.id">
        <li>{{ ele.name }}</li>
      </ul>
      <button @click="addTodo">添加</button>
    </div>
    <p>通过计算属性computed，两个数组的长度是：{{ sum }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
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

    // expose to template
    return {
      eleList,
      addEle,
      addTodo,
      ...toRefs(dataObj),
      sum
    }
  }
}
</script>

<style scoped>
ul li {
  list-style: none;
  float: left;
  margin-right: 10px;
}
</style>