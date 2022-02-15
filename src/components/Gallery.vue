<template>
    <v-container id="gallery">
        <h3>Galleri</h3>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-carousel>
              <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
              ></v-carousel-item>
          </v-carousel>
      </v-lazy>
    </v-container>
</template>

<script>
  export default {
      name: 'gallery',
    data () {
      return {
        isActive: false,
        items: [
          {
            src: require('../assets/images/festdukning-lilla-salen.webp'),
          },
          {
            src: require('../assets/images/festdukning-stora-salen.webp'),
          },
          {
            src: require('../assets/images/hallen1.webp'),
          },
          {
            src: require('../assets/images/hallen2.webp'),
          },
        ],
      }
    },
  }
</script>

<style>

</style>