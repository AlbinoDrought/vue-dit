<template>
  <div class="item">
      <div class="ui tiny rounded image">
        <transition name="fade" appear>
          <img :src="thumbnail">
        </transition>
      </div>
    <div class="middle aligned content">
      <router-link v-if="post.is_self" class="header" :to="commentLink" v-text="post.title" />
      <a v-else class="header" :href="post.url" target="_blank" v-text="post.title"></a>

      <div class="meta">
        <span class="meta item">
          submitted
          <span class="time" v-text="relativeTime" />
          by
          <router-link :to="'/user/' + post.author">
            <span class="user" v-text="post.author" />
          </router-link>
          to
          <router-link :to="'/sub/' + post.subreddit">
            <span class="subreddit" v-text="post.subreddit" />
          </router-link>
        </span>
      </div>

      <div class="extra" v-if="showSelfText">
        <div class="ui readable segment">
          {{ post.selftext}}
        </div>
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
import placeholderThumbnail from '@/assets/placeholder.png';

const moment = require('moment');

export default {
  name: 'post-slim',
  computed: {
    hasThumbnail() {
      if (!this.post) return false;

      const { thumbnail } = this.post;

      return thumbnail && thumbnail.indexOf('://') >= 0;
    },
    thumbnail() {
      return this.hasThumbnail
        ? this.post.thumbnail
        : placeholderThumbnail;
    },
    showSelfText() {
      return this.post && this.post.selftext && (!this.expandable || this.expanded);
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
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    expandable: {
      type: Boolean,
      default: false,
    },
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

<style>
.readable.segment {
  color: black;
}
.ui.items > .item .meta > .meta.item * {
  margin-right: 0;
}
</style>
