<template>
  <section class="hero walls-section">
    <div class="map-container">   
      <div class="map-wrapper">
        <gmap></gmap>
      </div>
    </div>
    <div class="marker-meta-container">
      <marker-item></marker-item>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import MarkerItem from '../components/MarkerItem';
import Gmap from '../components/Map';

export default {
  components: {
    MarkerItem, Gmap
  },
  head() {
    return {
      title: 'Walls',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All your favorite lacrosse walls in Hong Kong'
        }
      ]
    }
  }
}
</script>
