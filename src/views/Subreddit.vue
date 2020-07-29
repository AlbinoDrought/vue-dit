<template>
  <div class="ui main container">
    <div class="ui divided relaxed items">
      <post-slim v-for="post in posts" :post="post" :key="post.id" :expandable="true" />
      <infinite-loading v-if="posts.length > 0" :on-infinite="onInfinite" ref="infiniteLoading" />
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Api from '@/api';
import PostSlim from '@/components/PostSlim.vue';

export default {
  components: {
    InfiniteLoading,
    PostSlim,
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
  metaInfo() {
    return {
      title: this.isFrontPage
        ? 'vue-dit: random page of the internet'
        : this.subreddit,
    };
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
