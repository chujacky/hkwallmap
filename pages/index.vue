<template>
  <section class="hero">
    <div class="content">   
      <div class="map-container">
        <gmap></gmap>
      </div>
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

<style>
.content {
  position: relative;
  margin: 0 auto;
  text-align: left;
  width: 100%;
  height: 100%;;
}

.columns {
  width: 100%;
}

.map-container {
  position: relative;
  height: 100%;
}

@media (max-width: 768px) {
  .map-container {
    height: 50%;
  }
}

.links {
  padding-top: 15px;
}
</style>
