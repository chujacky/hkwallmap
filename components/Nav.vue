<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <!-- <h2 class="title">hklaxwalls</h2> -->
        <img src="/hklaxwall-02.png" alt="">
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

      <div class="navbar-end">
        <div class="navbar-item">
          <a href="https://www.instagram.com/hk_lax_walls/" class="link" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
        </div>
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

<style>
  a.navbar-item.is-active {
    cursor: default;
  }

  .fa-instagram {
    font-size: 25px;
  }
</style>