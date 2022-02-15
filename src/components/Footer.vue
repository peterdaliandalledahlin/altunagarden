<template>
  <v-container fluid class="pa-0">
      
    <v-footer class="pa-0">
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>&copy; Altunagården</strong>
        </v-card-text>
        <v-card-text class="white--text">
            <v-chip
                class="ma-2"
                color="deep-purple accent-4"
                outlined
            >
                <v-icon left>
                    mdi-wrench
                </v-icon>
                site made by peterdaliandalledahlin@gmail.com
            </v-chip>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
    }),
    computed: {

    },
}
</script>

<style scoped>
.v-card__text.white--text {
    padding: 0 !important;
}
</style>