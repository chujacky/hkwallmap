<template>
  <div class="address-search">
    <label class="label">Wall Address <span class="error" v-show="error">*please add a point</span></label>
    <gmap-autocomplete
      class="input is-small"
      placeholder="Search address or drop the marker on the map"
      @place_changed="setPlace">
    </gmap-autocomplete>
    <!-- <button class="button is-light is-small" @click="onNextPage">Next</button> -->
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
  props: {
    error: Boolean
  },
  methods: {
    setPlace(place) {
      this.address = place;
      this.$store.commit('setNewMarker', {
        lat: this.address.geometry.location.lat(),
        lng: this.address.geometry.location.lng(),
      });
    },
    onNextPage() {
      if (!Object.keys(this.position).length) {
        return alert('Please add a marker before moving forward.');
      } 

      this.$root.$emit('open-form');
    },
  },
  computed: {
    position() {
      return this.$store.state.newMarker;
    }
  }
}
</script>
