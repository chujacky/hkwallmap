<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="/hklaxwall-04.png" alt="">
      </nuxt-link>

       <nuxt-link to='/add' class="nav-add">
          <span>ADD WALL!</span>
          <font-awesome-icon :icon="['fas', 'plus']"/>
       </nuxt-link>
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