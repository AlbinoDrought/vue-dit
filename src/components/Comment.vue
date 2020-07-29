<template>
  <div class="comment" :class="{ selected }">
    <div class="content">
      <a class="clickable fw-expando" @click="expanded = !expanded" v-text="expandoText" />
      <router-link :to="'/user/' + comment.author" class="author" v-text="comment.author" />
      <div class="metadata">
        <router-link class="muted" :to="permalink" @click.native="scrollToComment">
          <relative-time :unix="comment.created_utc" />
        </router-link>
      </div>
      <markdown v-if="expanded" class="text" :markdown="comment.body" />
    </div>
    <div v-if="expanded && showChildren && replies.length > 0" class="comments">
      <comment v-for="reply in replies" :comment="reply" :key="reply.id" />
    </div>
  </div>
</template>

<script>
import Markdown from './Markdown.vue';
import RelativeTime from './RelativeTime.vue';

export default {
  name: 'comment',
  components: {
    Markdown,
    RelativeTime,
  },
  computed: {
    permalink() {
      return {
        name: 'sub.post',
        params: {
          subreddit: this.comment.subreddit,
          id: this.comment.link_id.substr(3),
        },
        query: {
          comment: this.comment.id,
        },
      };
    },
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
    selected() {
      return this.$route.query.comment === this.comment.id;
    },
  },
  data() {
    return {
      expanded: true,
    };
  },
  methods: {
    scrollToComment() {
      if (this.selected) {
        this.$el.scrollIntoView();
      }
    },
  },
  mounted() {
    this.scrollToComment();
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
  watch: {
    $route() {
      this.scrollToComment();
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

.ui.comments .comment .comments {
  /* prevent very large bottom margins from accumulating in deep comment chains */
  padding-top: 0.5em;
  padding-bottom: 0;
  margin-bottom: 0;
}

.comment {
  scroll-margin-top: 4em;
}

.comment.selected {
  background-color: rgba(200,200,255,0.2) !important;
}

.comment .metadata a.muted {
  color: rgba(0,0,0,.4);
}
.comment .metadata a.muted:hover {
  color: #4183c4;
}
</style>
