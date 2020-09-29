import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';

Vue.use(VueRouter);

const routes = [
  {
      path:'/about',
      component: () => import('./views/About'),
      // component:About,
  },
  {
      path:'/guestbook',
      component: () => import('./views/Guestbook'),
      // component:Guestbook,
  },
  {
      path:'/sitemap',
      component: () => import('./views/Sitemap'),
      // component:Sitemap,
  },
  {
      path:'/home',
      component: () => import('./views/Home'),
      // component:Home,
  }
]












const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeResolve((to,from,next) => {
  const isRequiresLogin =  to.matched.some(res => res.meta.requiresLogin)
  if(isRequiresLogin){
    const isLogin = document.cookie.includes('login=true');
    if(isLogin){
      next()
    }else{
      const isToLogin = window.confirm("要登录后才可以浏览");
      if(isToLogin){
        next('/login')
      }else{
        next(false)
      }
    }
  }else{
    next()
  }
})
export default router;