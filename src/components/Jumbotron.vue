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
          <!-- <h1 :class="{'text-h1 font-weight-thin mb-4' : $vuetify.breakpoint.lg, 'text-h2 font-weight-thin mb-4' : $vuetify.breakpoint.md, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.sm, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.xs}"> -->
          <h1 class="font-weight-thin mb-4"> 
            Välkomna till Altuna bygdegård
          </h1>
          <h2 class="font-weight-thin mb-4">
          <!-- <h2 :class="{'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.lg, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.md, 'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.sm,  'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.xs}"> -->
            En mötesplats för alla.
          </h2>
          <!-- <div class="mx-auto"> -->
            <v-btn @click="$vuetify.goTo('#book',  {duration: 500, easing: 'easeInOutCubic'})" color="black" max-width="200" id="opacity-btn-1" class="mr-3">
              Boka bygdegården
            </v-btn>
            <v-btn @click="$vuetify.goTo('#events', {duration: 500, easing: 'easeInOutCubic'})" color="black" max-width="200" id="opacity-btn-1">
              Till evenemangen
            </v-btn>
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      //overlay: true,
    }),
  }
</script>

<style scoped>
h1, h2 {
  text-shadow: 2px 2px rgba(165,92,27, .7);
}
h2 {
  text-shadow: 2px 2px rgba(0,0,0, .8);
}
h1 {
  font-size: clamp(2.5rem, 5vw, 6rem);
}
h2 {
  font-size: clamp(1.5rem, 3vw, 4rem);
  margin-bottom: 1rem;
}
#opacity-btn-1 {
  background-color: rgba(165,92,27, .7) !important;
}
/* .outline {
  -webkit-text-stroke: 1px black;
} */
</style>