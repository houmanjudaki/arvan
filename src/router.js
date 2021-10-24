import { createRouter, createWebHistory } from 'vue-router';
import AllArticle from './pages/AllArticle.vue'
import NewArticle from './pages/NewArticle.vue'
const routes = [
    {name: 'AllArticle' , path: '/' , component: AllArticle},
    {name: 'NewArticle' , path: '/NewArticle' , component: NewArticle}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router