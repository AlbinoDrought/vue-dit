<template>
  <div>
    <header-menu></header-menu>
    <div class="ui main container">
      <h2 class="ui header" v-text="username"></h2>
      <div class="ui relaxed items comments">
        <template v-for="item in items">
          <comment v-if="item.kind === 't1'" :comment="item" :key="item.id"></comment>
          <post v-else :post="item" :key="item.id"></post>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api';
import HeaderMenu from '@/components/HeaderMenu';
import Post from '@/components/Post';
import Comment from '@/components/Comment';

export default {
  components: {
    HeaderMenu,
    Post,
    Comment,
  },
  data() {
    return {
      items: [],
    };
  },
  props: {
    username: '',
  },
  methods: {
    view() {
      this.$root.$emit('loading', true);
      Api.getUserComments(this.username).then((data) => {
        console.log(data);
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
