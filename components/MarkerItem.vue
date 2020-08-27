<template>
  <div class="marker-item box" v-if="Object.keys(marker).length">
    <h2 class="title is-5">{{marker.name}}</h2>
    <div class="marker-meta">
      <div class="meta-item image-wraper" v-if="marker.imageUrl">
        <figure class="image is-3by2">
          <img :src="marker.imageUrl">
        </figure>
      </div>
      <div class="safety-notes meta-item">
        <p class="has-text-weight-semibold mb-1">Trouble/Passby</p>
        <p>{{marker.trouble}}</p>
      </div>
      <div class="time-notes meta-item">
        <p class="has-text-weight-semibold mb-1">Timing</p>
        <p>{{marker.time}}</p>
      </div>
      <div class="space-notes meta-item">
        <p class="has-text-weight-semibold mb-1">Space</p>
        <p>{{marker.space}}</p>
      </div>
      <div class="ball-safety-notes meta-item">
        <p class="has-text-weight-semibold mb-1">Chance of losing ball</p>
        <p>{{marker.ballSafety}}</p>
      </div>
      <div class="transportation-notes meta-item">
        <p class="has-text-weight-semibold mb-1">Transportation</p>
        <p>{{marker.transportation}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marker-item',
  computed: {
    marker() {
      return this.$store.state.activeMarker;
    }
  }
}
</script>

<style>
  .meta-item {
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-size: 13px;;
  }
</style>
