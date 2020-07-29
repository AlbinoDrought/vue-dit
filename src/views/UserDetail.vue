<template>
  <div class="ui main container">
    <h2 class="ui header" v-text="username" />
    <div class="ui relaxed items comments">
      <template v-for="item in items">
        <comment v-if="item.kind === 't1'" :comment="item" :key="item.id" />
        <post-slim v-else :post="item" :key="item.id" />
      </template>
    </div>
  </div>
</template>

<script>
import Api from '@/api';
import PostSlim from '@/components/PostSlim.vue';
import Comment from '@/components/Comment.vue';

export default {
  components: {
    PostSlim,
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
  metaInfo() {
    return {
      title: `overview for ${this.username}`,
    };
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
