<template>
  <Gmap-map :center="center" :zoom="11" style="width: 100%; height: 600px" @click="addMarker">
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
    </gmap-info-window>

    <template v-if="this.$route.name === 'index'">
      <gmap-marker
      v-for="(item, index) in markers"
      :key="index"
      :position="item.position"
      :clickable="true"
      @click="toggleInfoWindow(item,index)"
    />
    </template>
    <template v-else-if="Object.keys(newMarker).length">
      <gmap-marker
        :position="newMarker"
        :clickable="true"
      />
    </template>
  </Gmap-map>
</template>

<script>
export default {
  name: 'gmap',
  data() {
    return {
      newMarker: {},
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: {lat:22.3193, lng:114.1694},
    };
  },
  computed: {
    markers() {
      return this.$store.state.locations.list
    }
  },
  methods: {
    addMarker(event) {
      this.newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }

      this.$root.$emit('newMarker', this.newMarker);
    },
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.name;
      this.$store.commit('locations/setActiveMarker', marker);
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  },
}
</script>

<style>

</style>