<template>
  <span>
    submitted
    <relative-time :unix="post.created_utc" />
    by
    <router-link :to="'/user/' + post.author">
      <span class="user" v-text="post.author" />
    </router-link>
    to
    <router-link :to="'/sub/' + post.subreddit">
      <span class="subreddit" v-text="post.subreddit" />
    </router-link>
  </span>
</template>

<script>
import RelativeTime from './RelativeTime.vue';

export default {
  components: {
    RelativeTime,
  },
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>
