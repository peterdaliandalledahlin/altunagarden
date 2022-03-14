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
                  v-for="item in items"
                  :key="item.id"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
              >
                <v-container
                      fill-height
                      fluid
                      pa-0 ma-0 pb-3 

                    >
                      <v-layout fill-height align-end pb-6 mb-4>
                        <v-flex xs12>
                          <v-card color="transparent" class="pa-2">
                            <span :style="{backgroundColor: '#000000', opacity: '.6'}" class="headline white--text text-subtitle-1" v-text="item.title"></span>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
              </v-carousel-item>
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
            id: 1,
            src: require('../assets/images/festdukning-lilla-salen.webp'),
            title: 'Festdukning i lilla salen'
          },
          {
            id: 2,
            src: require('../assets/images/festdukning-stora-salen.webp'),
            title: 'Festdukning i stora salen'
          },
          {
            id: 3,
            src: require('../assets/images/hallen1.webp'),
            title: 'Interiörbild från hallen'
          },
          {
            id: 4,
            src: require('../assets/images/hallen2.webp'),
            title: 'Interiörbild från hallen'
          },
        ],
      }
    },
  }
</script>

<style>

</style>