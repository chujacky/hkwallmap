<template>
  <div id="root">
    <nav-bar></nav-bar>
    <Nuxt />
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '../components/Nav';
import PageFooter from '../components/Footer';

export default {
  components: {
    NavBar,
    PageFooter
  },
  mounted() {
    this.width = window.innerWidth;
  }
}
</script>
