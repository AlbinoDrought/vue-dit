<template>
  <span class="time" :title="readableTime">
    {{ relativeTime }}
  </span>
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    relativeTime() {
      return moment.unix(this.unix).fromNow();
    },
    readableTime() {
      return moment.unix(this.unix).format('MMMM Do YYYY, h:mm:ss a');
    },
  },
  props: {
    unix: {
      type: Number,
      required: true,
    },
  },
};
</script>
