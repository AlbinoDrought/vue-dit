<template>
  <div class="comment">
    <div class="content">
      <a class="clickable fw-expando" @click="expanded = !expanded" v-text="expandoText" />
      <router-link :to="'/user/' + comment.author" class="author" v-text="comment.author" />
      <div class="metadata">
        <relative-time :unix="comment.created_utc" />
      </div>
      <div v-if="expanded" class="text" v-text="comment.body" />
    </div>
    <div v-if="expanded && showChildren && replies.length > 0" class="comments">
      <comment v-for="reply in replies" :comment="reply" :key="reply.id" />
    </div>
  </div>
</template>

<script>
import RelativeTime from './RelativeTime.vue';

export default {
  name: 'comment',
  components: {
    RelativeTime,
  },
  computed: {
    replies() {
      const { replies } = this.comment;

      if (typeof (replies) === 'undefined') {
        return [];
      }

      return replies.children;
    },
    expandoText() {
      return this.expanded ? '[-]' : '[+]';
    },
  },
  data() {
    return {
      expanded: true,
    };
  },
  props: {
    showChildren: {
      type: Boolean,
      default: true,
    },
    comment: {
      type: Object,
      default() {
        return {
          id: '',
          author: '',
          body: '',

          created_utc: 0,
          score: 0,

          replies: [],
        };
      },
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

.fw-expando {
  padding-right: 5px;
}
</style>
