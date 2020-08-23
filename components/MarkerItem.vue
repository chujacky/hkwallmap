<template>
  <div class="marker-item box" v-if="marker">
    <h2 class="title is-5">{{marker.name}}</h2>
    <div class="marker-meta">
      <div class="safety-notes meta-item">
        <p>{{marker.meta.trouble}}</p>
      </div>
      <div class="time-notes meta-item">
        <p>{{marker.meta.time}}</p>
      </div>
      <div class="space-notes meta-item">
        <p>{{marker.meta.space}}</p>
      </div>
      <div class="ball-safety-notes meta-item">
        <p>{{marker.meta.ballSafety}}</p>
      </div>
      <div class="transport-notes meta-item">
        <p>{{marker.meta.transport}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marker-item',
  computed: {
    marker() {
      return this.$store.state.locations.activeMarker;
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
