<template>
  <div class="ui main container">
    <h2 class="ui header" v-text="username"></h2>
    <div class="ui relaxed items comments">
      <template v-for="item in items">
        <comment v-if="item.kind === 't1'" :comment="item" :key="item.id"></comment>
        <post v-else :post="item" :key="item.id"></post>
      </template>
    </div>
  </div>
</template>

<script>
import Api from '@/api';
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';

export default {
  components: {
    Post,
    Comment,
  },
  data() {
    return {
      items: [],
    };
  },
  props: {
    username: { type: String, required: true },
  },
  methods: {
    view() {
      this.$root.$emit('loading', true);
      Api.getUserComments(this.username).then((data) => {
        this.items = data.children;
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
