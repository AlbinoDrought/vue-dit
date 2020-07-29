<template>
  <div class="ui main container">
    <div class="ui divided relaxed items">
      <post v-for="post in posts" :post="post" :key="post.id" :expandable="true" />
      <infinite-loading v-if="posts.length > 0" :on-infinite="onInfinite" ref="infiniteLoading" />
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Api from '@/api';
import Post from '@/components/Post.vue';

export default {
  components: {
    InfiniteLoading,
    Post,
  },
  data() {
    return {
      posts: [],
      after: undefined,
      mode: 'hot',
    };
  },
  props: {
    subreddit: { type: String, default: '' },
    isFrontPage: { type: Boolean, default: false },
  },
  methods: {
    view() {
      this.$root.$emit('loading', true);

      return Api.getSubreddit(this.subreddit, this.mode, this.after).then((data) => {
        this.posts = data.children;
        this.after = data.after;

        this.$root.$emit('loading', false);
      });
    },
    more() {
      this.$root.$emit('loading', true);

      return Api.getSubreddit(this.subreddit, this.mode, this.after).then((data) => {
        this.posts = this.posts.concat(data.children);
        this.after = data.after;

        this.$root.$emit('loading', false);

        return data;
      });
    },
    onInfinite() {
      this.more().then((data) => {
        if (data.after && data.children.length > 0) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        } else {
          // no more data to load
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        }
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
