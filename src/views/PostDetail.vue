<template>
  <div class="ui main container" v-if="loaded">
    <div class="ui items">
      <post-full :post="post" />
    </div>

    <div v-if="comments.length > 0" class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <comment v-for="comment in comments" :comment="comment" :key="comment.id"></comment>
    </div>
    <div v-else class="ui message">
      <p>No comments found.</p>
    </div>
  </div>
</template>

<script>
import Api from '@/api';
import PostFull from '@/components/PostFull.vue';
import Comment from '@/components/Comment.vue';

export default {
  components: {
    Comment,
    PostFull,
  },
  data() {
    return {
      loaded: false,
      post: {},
      comments: [],
    };
  },
  props: {
    id: null,
    subreddit: null,
  },
  mounted() {
    this.$root.$emit('loading', true);
    Api.getPostDetail(this.subreddit, this.id).then((data) => {
      this.post = data.post;
      this.comments = data.comments.children;
      this.$root.$emit('loading', false);
      this.loaded = true;
    });
  },
};
</script>
