<template>
  <form @submit="handleForm">
    <div class="field">
      <label class="label">Player Name</label>
      <input type="text" v-model="player" required>
    </div>
    <div class="field">
      <label class="label">Instagram ID</label>
      <input type="text" v-model="ig">
    </div>
    <div class="field">
      <label class="label">Latitude</label>
      <input type="number" v-model.number="position.lat" step="any" required>
    </div>
    <div class="field">
      <label class="label">Longitude</label>
      <input type="number" v-model.number="position.lng" step="any" required>
    </div>
    <div class="field">
      <label class="label">Name of Wall</label>
      <input type="text" v-model="name" requried>
    </div>
    <div class="field">
      <label class="label">What are the chances of getting into trouble?</label>
      <textarea class="textarea" rows="2" v-model="trouble" required></textarea>
    </div>
    <div class="field">
      <label class="label">When is the best time to use the wall?</label>
      <input type="text" v-model="time" required>
    </div>
    <div class="field">
      <label class="label">Is the wall spacious?</label>
      <input type="text" v-model="space" required>
    </div>
    <div class="field">
      <label class="label">What are the chances of losing the ball?</label>
      <input type="text" v-model="ballSafety" required>
    </div>
    <div class="field">
      <label class="label">How do you get there?</label>
      <input type="text" v-model="transport" required>
    </div>
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'add-wall-form',
  data() {
    return {
      player: '',
      ig: '',
      position: {
        lat: null,
        lng: null,
      },
      name: '',
      trouble: '',
      time: '',
      space: '',
      ballSafety: '',
      transport: ''
    }
  },
  mounted() {
    this.$root.$on('newMarker', data => {
      this.position = data;
    });
  },
  methods: {
    handleForm(event) {
      event.preventDefault();
      console.log(this.$data);
    }
  }
}
</script>

<style>

</style>