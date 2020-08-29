<template>
  <div class="section add-wall-container">
    <div class="container">
      <div class="columns">
          <div class="column map-container">
            <search></search>
            <gmap></gmap>
          </div>
          <div class="column">
            <add-wall-form></add-wall-form>
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
  },
  head() {
    return {
      title: 'Add Wall',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Add your favorite walls'
        }
      ]
    }
  }
}
</script>
