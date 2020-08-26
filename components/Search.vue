<template>
  <div class="control">
    <gmap-autocomplete
      placeholder="Type address"
      @place_changed="setPlace">
    </gmap-autocomplete>
  </div>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
export default {
  name: 'search',
  data() {
    return {
      address: ''
    }
  },
  methods: {
    setPlace(place) {
      this.address = place;
      this.$store.commit('setNewMarker', {
        lat: this.address.geometry.location.lat(),
        lng: this.address.geometry.location.lng(),
      });
    }
  }
}
</script>

<style scoped>
  input {
    width: 50%;
    height: 2.5em;
  }
</style>