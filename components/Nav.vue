<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <h2 class="title">hklaxwalls</h2>
      </nuxt-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Walls
        </nuxt-link>
        <nuxt-link to="/add" class="navbar-item">
          Add wall
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    toggleMenu() {
      this.$el.querySelector('.navbar-burger').classList.toggle('is-active');
      this.$el.querySelector('.navbar-menu').classList.toggle('is-active');
    }
  }
}
</script>
