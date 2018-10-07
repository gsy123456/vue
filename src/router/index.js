import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import TodoList from '@/components/TodoList'
import GadMap from '@/components/GadMap'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'TodoList',
    //   component: TodoList
    // },
    {
      path: '/',
      name: 'GadMap',
      component: GadMap
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
