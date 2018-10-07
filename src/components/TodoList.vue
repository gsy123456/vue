<template>
  <div>
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keydown.enter="addNewItem">
    <ul>
      <li v-for="item in items" v-on:click="toggleText(item)" v-bind:class="{finished:item.isFinished}" :key="item">
        {{item.label}}
      </li>
    </ul>
    <compontent-a fromChild="hello hi"></compontent-a>
    <compontent-a @fromChildCom="childWord"></compontent-a>
    <p>{{childMsg}}</p>
  </div>
</template>

<script>
import Store from './store.js'
import compontentA from './compontentA'
export default {
  name:"TodoList",
  data(){
    return {
      title:"this is a todo list",
      items:Store.fetch(),
      newItem:"",
      childMsg:""
    }
  },
  components:{compontentA},
  watch:{
    items:{
      handler:function(items){
        Store.save(items);
      },
      deep:true,
    }
  },
  methods:{
    addNewItem(){
      this.items.push({label:this.newItem,isFinished:false});
      this.newItem = ""
    },
    toggleText(item){
      item.isFinished = !item.isFinished;
    },
    childWord(msg){
      this.childMsg = msg;
    }

  }
}
</script>

<style>
  .finished{
    text-decoration:underline
  }
  li{
    padding-top:15px;
    cursor:pointer;
  }
</style>
