<template>
  <div class="locations-list-wrapper">
    <marker-item v-for="marker in markers" :key="marker.name" :marker="marker"></marker-item>
  </div>
</template>

<script>
import MarkerItem from './MarkerItem';

export default {
  name: 'markers-list',
  components:{
    MarkerItem
  },
  computed: {
    markers() {
      return this.$store.state.locations.list
    }
  }
}
</script>

<style>

</style>template