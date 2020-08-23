<template>
  <div class="section">
    <div class="container">
      <div class="columns">
          <div class="column">
            <add-wall-form></add-wall-form>
          </div>
          <div class="column map-container">
            <gmap></gmap>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import AddWallForm from '../../components/AddWallForm';
import Gmap from '../../components/Map';

export default {
  components: {
    AddWallForm, Gmap
  }
}
</script>

<style>
  .columns {
    width: 100%;
  }

  .map-container {
    min-width: 70%;
  }
</style>