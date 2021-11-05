import { createRouter, createWebHistory } from 'vue-router';

import AllArticle from './components/AllArticle.vue';
import NewArticle from './components/NewArticle.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Create from './components/post/Create.vue';
import Update from './components/post/Update.vue';
import Auth from './components/auth/Auth.vue';

const routes = [
  {name: 'AllArticle' , path: '/' , component: AllArticle},

  {name: 'NewArticle' , path: '/NewArticle' , component: NewArticle, children:[
    {path: 'Create', component:Create},
    {path: 'Update', component:Update}
  ]},

  {name: 'Auth' , path: '/Auth' , component: Auth, children:[
    {name: 'Login' , path: 'Login' , component: Login},
    {name: 'Register' , path: 'Register' , component: Register}
  ]}
  

];

const router = createRouter({
  history : createWebHistory(),
  routes
});

export default router;
