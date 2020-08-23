<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <h2 class="title">hkwallmap</h2>
      </nuxt-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
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
  name: 'nav-bar'
}
</script>
