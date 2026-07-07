<template>
  <div class="todopage">
    <h2 class="title">我是todo页面</h2>
    <div class="todoBox">
      <div class="from">
        <input
          type="text"
          placeholder="请输入任务"
          class="todoInput"
          v-model="todoContent"
          @keyup.enter="addtodo"
        />
        <span class="addBtn" @click="addtodo">添加任务</span>
      </div>
      <ul class="todolist">
        <li v-for="(item, index) in todoListData" v:key="index">
          {{ index + 1 }}. {{ item }}
          <span class="delicon" @click="deltodo(index)">x</span>
        </li>
        <!-- 1.跑步<span class="delicon">x</span> -->
        <!-- <li>2.跳绳<span class="delicon">x</span></li>
        <li>3.深蹲<span class="delicon">x</span></li> -->
      </ul>
      <div class="footer" v-show="todoListData.length > 0">
        <div class="left">合计：{{ todoListData.length }}</div>
        <div class="right" @click="clearAllTodo">清空任务</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todoListData = ref(['泡泡堂', '传奇', '魔域', '跑跑卡丁车'])
const todoContent = ref('')
const addtodo = () => {
  if (todoContent.value.trim() === '') {
    alert('请输入内容以后再添加！')
    return
  }
  todoListData.value.unshift(todoContent.value)
  todoContent.value = ''
}
const deltodo = (i) => {
  if (window.confirm('您确定要删除吗？')) {
    todoListData.value.splice(i, 1)
  }
}
const clearAllTodo = () => {
  if (window.confirm('您确定要清空吗？')) {
    todoListData.value = []
  }
}
</script>

<style lang="scss" scoped>
.todopage {
  background: #f5f5f5;
  padding-bottom: 20px;

  .title {
    text-align: center;
    font-size: 40px;
    color: #bd5959;
  }
  .todoBox {
    background: white;
    width: 400px;
    margin: 20px auto;
    padding: 10px;

    .form {
      display: flex;
    }
    .todoInput {
      width: 70%;
      outline: none;
      border: none;
      height: 40px;
      border: 2px solid #bf9595;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding-left: 10px;
    }
    .addBtn {
      width: 30%;
      background: #bf5959;
      color: white;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      user-select: none;
    }
    .todolist {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ececec;
        color: #515151;
        padding-left: 5px;
        padding-right: 5px;
        display: flex;
        justify-content: space-between;
        .delicon {
          font-size: 30px;
          font-family: '楷体';
          color: #bf5959;
          cursor: pointer;
          user-select: nome;
          display: none;
        }
      }
      li:hover {
        .delicon {
          display: block;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      height: 40px;
      line-height: 40px;

      .right:hover {
        text-decoration: underline;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
