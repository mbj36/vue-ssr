import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import About from '../components/About.vue'
import Error from '../components/Error.vue'
import Admin from '../components/Admin.vue'
import User from '../components/User.vue'
import SuperUser from '../components/SuperUser.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/hello',
            component: Hello,
            name: 'hello'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/admin',
            component: Admin,
            children: [{
                    path: 'user',
                    component: User,
                    name: 'user'
                },
                {
                    path: 'superuser',
                    component: SuperUser,
                    name: 'superuser'
                }
            ]
        }
    ]
})