import Vue from 'vue'
import Router from 'vue-router'
// import VsCarts from '../pages/VsCarts.vue'
// import VsList from "../pages/VsList.vue"
// import VsItem from "../pages/Vsitem.vue"
import advmanage from "../pages/advmanage.vue"


Vue.use(Router)

export default new Router({
    routes:[
      {
        path:'/',
        component:advmanage

      }
        // {
        //     path: '/cart',
        //     component: VsCarts
        //   },
        //   {
        //       path:"/list",
        //       name:"list",
        //       component:VsList
        //   },
        //   {
        //     path:"/item/:id",
        //     name:'item',
        //     component:VsItem
        // }
  ]
   
})