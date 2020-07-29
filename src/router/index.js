import Vue from 'vue';
import Router from 'vue-router';

import Subreddit from '@/views/Subreddit.vue';
import PostDetail from '@/views/PostDetail.vue';
import UserDetail from '@/views/UserDetail.vue';

Vue.use(Router);

export default new Router({
  mode: process.env.VUE_APP_ROUTING_MODE || 'history',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: Subreddit,
      props: {
        isFrontPage: true,
      },
    },
    {
      name: 'sub',
      path: '/sub/:subreddit',
      component: Subreddit,
      props: true,
    },
    {
      name: 'sub.post',
      path: '/sub/:subreddit/:id',
      component: PostDetail,
      props: true,
    },
    {
      name: 'user',
      path: '/user/:username',
      component: UserDetail,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.name && from.name && to.name === from.name) {
      return undefined;
    }

    return { x: 0, y: 0 };
  },
});
