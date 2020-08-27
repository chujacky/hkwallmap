<template>
  <section class="hero">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column map-container">
            <gmap></gmap>
          </div>
          <div class="column">
            <marker-item></marker-item>
          </div>
        </div>
      </div>
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
body {
  font-family: 'Helvetica Neue';
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.columns {
  width: 100%;
}

.map-container {
  min-width: 70%;
}

.links {
  padding-top: 15px;
}
</style>
