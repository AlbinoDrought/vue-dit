<template>
  <div class="ui main container">
    <div class="ui items">
      <post :post="post"></post>
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
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';

export default {
  components: {
    Comment,
    Post,
  },
  data() {
    return {
      loading: true,
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
    });
  },
};
</script>
