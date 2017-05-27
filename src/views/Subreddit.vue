<template>
  <div>
    <header-menu></header-menu>
    <div class="ui main container">
      <div class="ui divided relaxed items">
        <post v-for="post in posts" :post="post" :key="post.id"></post>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api';
import HeaderMenu from '@/components/HeaderMenu';
import Post from '@/components/Post';

export default {
  components: {
    HeaderMenu,
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  props: {
    subreddit: '',
    isFrontPage: false,
  },
  methods: {
    view() {
      this.$root.$emit('loading', true);

      let promise;

      if (this.isFrontPage) {
        promise = Api.getFrontPage();
      } else {
        promise = Api.getSubreddit(this.subreddit);
      }

      promise.then((data) => {
        this.posts = data.children;
        this.$root.$emit('loading', false);
      });
    },
  },
  mounted() {
    this.view();
  },
  watch: {
    $route: 'view',
  },
};
</script>
