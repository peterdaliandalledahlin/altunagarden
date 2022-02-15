<template>
  <v-parallax
      ref="home"
      dark
      :src="require('../assets/images/logo.jpg')"
      style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
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
          <h1 :class="{'text-h1 font-weight-thin mb-4' : $vuetify.breakpoint.lg, 'text-h2 font-weight-thin mb-4' : $vuetify.breakpoint.md, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.sm, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.xs}">
            Välkomna till Altuna bygdegård
          </h1>
          <h2 :class="{'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.lg, 'text-h3 font-weight-thin mb-4' : $vuetify.breakpoint.md, 'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.sm,  'text-h4 font-weight-thin mb-4' : $vuetify.breakpoint.xs}">
            En mötesplats för alla.
          </h2>
          <div :class="{'d-flex flex-row' : $vuetify.breakpoint.lg, 'd-flex flex-column' : $vuetify.breakpoint.xs}">
            <v-btn max-width="200" :class="{'mr-2' : $vuetify.breakpoint.lg, 'mr-2' : $vuetify.breakpoint.md, 'mb-2' : $vuetify.breakpoint.xs}">
              Boka bygdegården
            </v-btn>
            <v-btn max-width="200">
              Till evenemangen
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'jumbotron',
    data: () => ({}),
  }
</script>

<style scoped>

</style>