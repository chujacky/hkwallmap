<template>
  <div class="marker-item box" v-if="Object.keys(marker).length">
    <h2 class="title is-5">{{marker.name}}</h2>
    <div class="marker-meta">
      <div class="meta-item">
        <figure class="image is-3by2">
          <img :src="marker.imageUrl">
        </figure>
      </div>
      <div class="safety-notes meta-item">
        <p>{{marker.trouble}}</p>
      </div>
      <div class="time-notes meta-item">
        <p>{{marker.time}}</p>
      </div>
      <div class="space-notes meta-item">
        <p>{{marker.space}}</p>
      </div>
      <div class="ball-safety-notes meta-item">
        <p>{{marker.ballSafety}}</p>
      </div>
      <div class="transport-notes meta-item">
        <p>{{marker.transport}}</p>
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
