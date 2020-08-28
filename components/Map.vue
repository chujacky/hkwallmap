<template>
  <Gmap-map :center="center" :zoom="zoom" :options="mapOptions" style="width: 100%; height: calc(100vh - 52px)" @click="addMarker">
    <!-- <gmap-info-window :options="infoOptions" :position="infoWindowPos" 
      :opened="infoWinOpen" @closeclick="infoWinOpen=false" style="padding: 10px;">
    </gmap-info-window> -->

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
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-65"
            },
            {
                "lightness": "45"
            },
            {
                "gamma": "1.78"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-33"
            },
            {
                "lightness": "22"
            },
            {
                "gamma": "2.08"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry",
        "stylers": [
            {
                "gamma": "2.08"
            },
            {
                "hue": "#ffa200"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-55"
            },
            {
                "lightness": "-2"
            },
            {
                "gamma": "1.88"
            },
            {
                "hue": "#ffab00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#bbd9e5"
            },
            {
                "visibility": "simplified"
            }
        ]
    }]
      },
    };
  },
  computed: {
    markers() {
      return this.$store.state.walls;
    },
    newMarker() {
      return this.$store.state.newMarker;
    },
    activeMarker() {
      return this.$store.state.activeMarker;
    },
    center() {
      if (this.$route.name === 'index') {
        return this.activeMarker.position;
      } else if (Object.keys(this.newMarker).length) {
        return this.newMarker;
      }

      return {lat:22.3293, lng:114.1694};
    },
    zoom() {
      return this.$route.name === 'add' && Object.keys(this.newMarker).length ? 18 : 12;
    }
  },
  methods: {
    addMarker(event) {
      this.$store.commit('setNewMarker', {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = `<div class="content">${marker.name}</div>`;
      this.$store.commit('setActiveMarker', marker);
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
  .content {
    padding: 5px;
  }
</style>