import Vue from 'vue';
import Router from 'vue-router';

import Subreddit from '@/views/Subreddit';
import PostDetail from '@/views/PostDetail';
import UserDetail from '@/views/UserDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/sub/:subreddit',
      component: Subreddit,
      props: true,
    },
    {
      path: '/sub/:subreddit/:id',
      component: PostDetail,
      props: true,
    },
    {
      path: '/user/:username',
      component: UserDetail,
      props: true,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
