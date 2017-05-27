<template>
  <div class="item">
    <div class="ui tiny rounded image">
      <img v-if="hasThumbnail" :src="post.thumbnail">
    </div>
    <div class="middle aligned content">
      <router-link v-if="post.is_self" class="header" :to="commentLink" v-text="post.title"></router-link>
      <a v-else class="header" :href="post.url" target="_blank" v-text="post.title"></a>
      
      <div class="meta">
        submitted 
        <span class="time" v-text="relativeTime"></span>
        by
        <router-link :to="'/user/' + post.author">
          <span class="user" v-text="post.author"></span>
        </router-link>
        to
        <router-link :to="'/sub/' + post.subreddit">
          <span class="subreddit" v-text="post.subreddit"></span>
        </router-link>
      </div>

      <div class="extra">
        <router-link :to="commentLink">
          {{ post.num_comments }} comments
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'post',
  computed: {
    hasThumbnail() {
      if (!this.post) return false;

      const thumbnail = this.post.thumbnail;

      return thumbnail && thumbnail.indexOf('://') >= 0;
    },
    relativeTime() {
      return moment.unix(this.post.created_utc).fromNow();
    },
    readableTime() {
      return moment.unix(this.post.created_utc).format('MMMM Do YYYY, h:mm:ss a');
    },
    commentLink() {
      return `/sub/${this.post.subreddit}/${this.post.id}`;
    },
  },
  props: {
    post: {
      type: Object,
      default() {
        return {
          // generic
          id: '',
          subreddit: '',
          author: '',
          score: 0,
          created_utc: 0,
          title: '',

          // comment link
          permalink: '',

          // post type
          post_hint: 'image',

          // selftext
          selftext: '',

          // non-selftext
          url: '',

          // image-specific
          thumbnail: '',
        };
      },
    },
  },
};
</script>

<style scoped>

</style>
