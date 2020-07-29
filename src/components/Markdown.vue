<template>
  <div class="markdown" v-html="rendered" />
</template>

<script>
import { Remarkable } from 'remarkable';

const renderer = new Remarkable({
  html: false,
  breaks: true,
});

export default {
  computed: {
    rendered() {
      return renderer.render(this.markdown);
    },
  },
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
};
</script>
