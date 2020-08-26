<template>
  <div class="section">
    <div class="container">
      <div class="columns">
          <div class="column">
            <add-wall-form></add-wall-form>
          </div>
          <div class="column map-container">
            <search></search>
            <gmap></gmap>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import AddWallForm from '../../components/AddWallForm';
import Gmap from '../../components/Map';
import Search from '../../components/Search';

export default {
  components: {
    AddWallForm, Gmap, Search,
    head() {
      return {
        title: 'Add Wall - HKLAXWALLS',
        meta: [
          {
            hid: 'add',
            name: 'add',
            content: 'Add your favorite walls'
          }
        ]
      }
    }
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