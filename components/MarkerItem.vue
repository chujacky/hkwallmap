<template>
  <transition name="fade">
    <div class="marker-meta-wrapper box" :key="marker.id" 
      v-touch:swipe.up="open"
      v-touch:swipe.bottom="close"
    >
      <div class="mobile-swipe">
        <div class="swipe-line"></div>
        <p class="swipe-remark">Swipe up for more info</p>
      </div>
      <div class="marker-meta">
        <div class="meta-item image-wraper" v-if="marker.imageUrl">
          <figure class="image is-3by2">
            <img :src="marker.imageUrl">
          </figure>
        </div>
        <h2 class="title is-5 mb-4">{{marker.name}}</h2>
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
  </transition>
</template>

<script>
export default {
  name: 'marker-item',
  data() {
    return {
      isDesktop: true
    }
  },
  computed: {
    marker() {
      return this.$store.state.activeMarker;
    },
  },
  methods: {
    open() {
      this.$el.classList.add('active');
    },
    close() {
      this.$el.classList.remove('active');
    }
  },
}
</script>
