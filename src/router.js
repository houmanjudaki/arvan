import { createRouter, createWebHistory } from 'vue-router';
import AllArticle from './pages/AllArticle.vue';
import NewArticle from './pages/NewArticle.vue';
import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';
const routes = [
  {name: 'AllArticle' , path: '/' , component: AllArticle},
  {name: 'NewArticle' , path: '/NewArticle' , component: NewArticle},
  {name: 'Login' , path: '/Login' , component: Login},
  {name: 'Register' , path: '/Register' , component: Register}
];

const router = createRouter({
  history : createWebHistory(),
  routes
});

export default router;
