<template>
  <div class="scale-item" :class="isActive ? 'active': ''">
    {{scale.value}}
  </div>
</template>

<script>
export default {
  name: 'scale-item',
  props: {
   scale: Object, 
   value: [String, Array]
  },
  computed: {
    isActive() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.scale.slug);
      } else {
        return this.scale.slug === this.value;
      }
    }
  }
}
</script>
