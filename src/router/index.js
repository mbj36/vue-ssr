import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            component: Hello
        },
        {
            path: '/about',
            component: About
        }
    ]
})