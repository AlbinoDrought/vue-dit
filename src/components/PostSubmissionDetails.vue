<template>
  <span>
    submitted
    <span class="time" v-text="relativeTime" :title="readableTime" />
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
const moment = require('moment');

export default {
  computed: {
    relativeTime() {
      return moment.unix(this.post.created_utc).fromNow();
    },
    readableTime() {
      return moment.unix(this.post.created_utc).format('MMMM Do YYYY, h:mm:ss a');
    },
  },
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>
