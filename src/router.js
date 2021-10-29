import { createRouter, createWebHistory } from 'vue-router';

import AllArticle from './components/AllArticle.vue';
import NewArticle from './components/NewArticle.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

const routes = [
  {name: 'AllArticle' , path: '/' , component: AllArticle},
  {name: 'NewArticle' , path: '/NewArticle' , component: NewArticle},
  {name: 'Login' , path: '/auth/Login' , component: Login},
  {name: 'Register' , path: '/auth/Register' , component: Register}
];

const router = createRouter({
  history : createWebHistory(),
  routes
});

export default router;
