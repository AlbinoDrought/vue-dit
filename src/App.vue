<template>
  <div id="app">
    <header-menu></header-menu>
    <transition name="fade">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
  name: 'app',
  components: {
    HeaderMenu,
  },
  metaInfo: {
    title: 'Browsing',
    titleTemplate: '%s | vue-dit',
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.main.container {
  margin-top: 5em;
}
</style>
