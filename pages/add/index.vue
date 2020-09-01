<template>
  <section class="add-wall-section">
    <div class="add-wall-container"> 
      <div class="map-container active">
        <div class="map-wrapper">
          <gmap></gmap>
        </div>
      </div>
      <div class="form-container">
        <add-wall-form></add-wall-form>
      </div>
    </div>
  </section>
</template>

<script>
import AddWallForm from '../../components/AddWallForm';
import Gmap from '../../components/Map';

export default {
  components: {
    AddWallForm, Gmap
  },
  methods: {
    openForm() {
      this.$el.querySelector('.form-container').classList.add('active');
      this.$el.querySelector('.map-container').classList.remove('active');
    },
    closeForm() {
      this.$el.querySelector('.form-container').classList.remove('active');
      this.$el.querySelector('.map-container').classList.add('active');
    }
  },
  mounted() {
    this.$root.$on('open-form', this.openForm);
    this.$root.$on('close-form', this.closeForm);
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
