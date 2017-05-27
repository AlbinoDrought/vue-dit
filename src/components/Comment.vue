<template>
  <div class="comment">
    <div class="content">
      <a class="clickable fw-expando" @click="expanded = !expanded" v-text="expandoText"></a>
      <router-link :to="'/user/' + comment.author" class="author" v-text="comment.author"></router-link>
      <div class="metadata">
        <span class="time" v-text="relativeTime"></span>
      </div>
      <div v-if="expanded" class="text" v-text="comment.body"></div>
    </div>
    <div v-if="expanded && showChildren && replies.length > 0" class="comments">
      <comment v-for="reply in replies" :comment="reply" :key="reply.id"></comment>
    </div>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'comment',
  computed: {
    replies() {
      const replies = this.comment.replies;

      if (typeof (replies) === 'undefined') {
        return [];
      }

      return replies.children;
    },
    relativeTime() {
      return moment.unix(this.comment.created_utc).fromNow();
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
