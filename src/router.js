import { createRouter, createWebHistory } from 'vue-router';
import AllArticle from './pages/AllArticle'
const routes = [
    {name: 'dashboard' , path: '/' , component: AllArticle}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router