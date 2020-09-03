<template>
  <section class="section success-section">
    <div class="container">
      <font-awesome-icon :icon="['fas', 'check-circle']" />
      <p class="thanks-text">Thank you for your submission!</p>

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
