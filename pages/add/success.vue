<template>
  <section class="section success-section">
    <div class="container">
      <!-- <font-awesome-icon :icon="['fas', 'check-circle']" /> -->
      <div class="image-container">
        <img src="/success-wall.png" alt="">
      </div>
      <h2 class="thanks-text title">Your wall has been successfully added!</h2>

      <div class="links-container">
        <nuxt-link to="/">Back to homepage</nuxt-link>
        <nuxt-link to="/add">Add another wall</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
