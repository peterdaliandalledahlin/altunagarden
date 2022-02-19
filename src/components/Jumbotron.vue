<template>
  <v-parallax
      ref="home"
      dark
      :src="require('@/assets/images/logo.jpg')"

      id="home"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 :class="{'text-h1 font-weight-thin mb-4 outline' : $vuetify.breakpoint.lg, 'text-h2 font-weight-thin mb-4 outline' : $vuetify.breakpoint.md, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.sm, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.xs}">
            Välkomna till Altuna bygdegård
          </h1>
          <h2 :class="{'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.lg, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.md, 'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.sm,  'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.xs}">
            En mötesplats för alla.
          </h2>
          <div class="mx-auto">
            <v-btn @click="$vuetify.goTo('#book',  {duration: 500, easing: 'easeInOutCubic'})" id="opacity" color="black" max-width="200" class="mr-2">
              Boka bygdegården
            </v-btn>
            <v-btn @click="$vuetify.goTo('#events', {duration: 500, easing: 'easeInOutCubic'})" id="opacity" color="black" max-width="200">
              Till evenemangen
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({}),
  }
</script>

<style scoped>
#opacity {
  background-color: rgba(165,92,27, .7) !important;
}
.outline {
  -webkit-text-stroke: 1px black;
}
</style>