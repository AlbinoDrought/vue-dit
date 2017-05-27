<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <router-link to="/" class="header item">
        <img class="logo" src="~@/assets/logo.png">
        VueDit
      </router-link>

      <router-link to="/" class="item">
        Front Page
      </router-link>

      <router-link to="/sub/videos" class="item">
        Videos
      </router-link>

      <div v-show="loading" class="ui active centered inverted loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-menu',
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.$root.$on('loading', (newValue) => {
      this.loading = newValue;
    });
  },
};
</script>

<style scoped>
img.logo {
  margin-right: 1.5em;
}
</style>
