import Vue from 'vue'
import Router from 'vue-router'
import VsCarts from '../pages/VsCarts.vue'



Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            component: VsCarts
          }
    ]
})