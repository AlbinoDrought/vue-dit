<template>
  <div class="post item">
      <div class="ui tiny rounded image">
        <transition name="fade" appear>
          <img :src="thumbnail">
        </transition>
      </div>
    <div class="middle aligned content">
      <router-link v-if="post.is_self" class="header" :to="commentLink" v-text="post.title" />
      <a v-else class="header" :href="post.url" target="_blank" v-text="post.title"></a>

      <div class="meta">
        <post-submission-details class="meta item" :post="post" />
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
import PostSubmissionDetails from './PostSubmissionDetails.vue';

export default {
  name: 'post-full',
  components: {
    PostSubmissionDetails,
  },
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
      return this.post && this.post.selftext;
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

<style>
.readable.segment {
  color: black;
}
.ui.items > .post.item .meta > .meta.item * {
  margin-right: 0;
}
</style>
