<template>
  <Gmap-map :center="center" :zoom="zoom" :options="mapOptions" style="width: 100%; height: 100%" @click="addMarker">
    <!-- <gmap-info-window :options="infoOptions" :position="infoWindowPos" 
      :opened="infoWinOpen" @closeclick="infoWinOpen=false" style="padding: 10px;">
    </gmap-info-window> -->

    <template v-if="this.$route.name === 'index'">
      <gmap-marker v-for="(item, index) in markers" :key="index" :position="item.position" :icon="icon" :clickable="true"
        @click="setActiveMarker(item, index)" />
      <gmap-marker :position="activeMarker.position" :icon="activeIcon" :zIndex="activeIndex" />
    </template>
    <template v-else-if="Object.keys(newMarker).length">
      <gmap-marker :position="newMarker" :clickable="true" />
    </template>
  </Gmap-map>
</template>

<script>
import styles from '~/static/mapStyles.json';

export default {
  name: 'gmap',
  data() {
    return {
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        },
      },
      mapOptions: {
        streetViewControl: false,
        styles: styles.muted,
        minZoom: 8,
        disableDefaultUI: true,
        zoomControl: true
      },
      icon: {
        url: '/hkwallmap/marker.svg',
      },
      activeIcon: {
        url: '/hkwallmap/selected.svg'
      },
      activeIndex: 1000
    };
  },
  computed: {
    markers() {
      return this.$store.state.walls.filter(wall =>
        wall.id !== this.$store.state.activeMarker.id
      );
    },
    newMarker() {
      return this.$store.state.newMarker;
    },
    activeMarker() {
      return this.$store.state.activeMarker;
    },
    center() {
      if (Object.keys(this.newMarker).length) {
        return this.newMarker;
      }

      return { lat: 22.3293, lng: 114.1694 };
    },
    zoom() {
      return this.$route.name === 'add' && Object.keys(this.newMarker).length ? 16 : 12;
    }
  },
  methods: {
    addMarker(event) {
      if (this.$route.name === 'index') {
        return;
      }

      this.$store.commit('setNewMarker', {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    },
    setActiveMarker(marker, idx) {
      this.$store.commit('setActiveMarker', marker);
      this.$root.$emit('open');
    }
  },
}
</script>

<style>
.content {
  padding: 5px;
}
</style>