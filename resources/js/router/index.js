// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import AdminHome from '../views/admin/Home.vue'
import Users from '../views/Users.vue'

import Register from '../views/admin/auth/Register.vue'
import Login from '../views/admin/auth/Login.vue'
import { requireAuth } from '../middleware/authMiddleware';
import { useAuthStore } from '../store/authStore';


const routes = [
  {
    path: '/',
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home'
      },
      {
        path: '/about',
        component: About,
        name: 'About'
      },

      {
        path: '/contact',
        component: Contact,
        name: 'Contact'
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: checkAdminRights,
    children: [
      {
        path: '/', redirect: 'dashboard',
        name: 'AdminHome'
      },
      {
        path: 'dashboard',
        component: AdminHome,
        name: 'Dashboard',
      },
      {
        path: 'users',
        component: Users,
        name: 'Users',
      },
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   console.log(authStore.token); 
//   // const isAuthenticated = authStore.getTokenFromLocalStorage; // Assuming you have a method to check authentication status in your store

//   if (authStore.token == null) { 
//     routes.push('Login');
//     // next('/login'); // Redirect to login if authentication is required but user is not authenticated
//   } else {alert(2);
//     // next(); // Proceed to the next middleware or route handler
//   }
// });



function checkAdminRights(to, from, next) {
  
  const authStore = useAuthStore();
  const isAuthenticated = authStore.getTokenFromLocalStorage; // Assuming you have a method to check authentication status in your store

  if (authStore.token == null) {
    next({ path: '/Login' });
  } else {
    next();
  }
}
export default router