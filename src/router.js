import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Form from './components/Form.vue'
import Componente from './components/Componente.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/form', component: Form },
        { path: '/componente', component: Componente },
    ]
})