<template>
  <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
      v-click-outside="setLocalStorageValue"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h6 text-center">Stöd Föreningen<br /> Altunagården – bli medlem eller sponsor!</v-card-title>
        
        <v-divider class="my-3"></v-divider>
        
        <v-card-text class="text-center">
          Vill du bli medlem i Altuna bygdegårdsförening?
          <v-btn small @click="$vuetify.goTo('#membership', dialog = false,  {duration: 500, easing: 'easeInOutCubic'})" max-width="200" class="my-3">Jag vill veta mer...</v-btn>
          
          <v-divider class="my-3"></v-divider>

          Vill du bli sponsor och stödja Altunagården?
          <v-btn small @click="$vuetify.goTo('#sponsorship', dialog = false,  {duration: 500, easing: 'easeInOutCubic'})" max-width="200" class="my-3">Jag vill veta mer...</v-btn>
          
          <v-divider class="my-3"></v-divider>
          
          Du som känner att du vill hjälpa till med att ordna eller leda aktiviteter och/eller kanske hjälpa till att arbeta med Altunagårdens skötsel är välkommen att kontakta någon i vår styrelse.
          <v-btn small @click="$vuetify.goTo('#contact', dialog = false,  {duration: 500, easing: 'easeInOutCubic'})" max-width="200" class="mt-3">Till kontaktsidan</v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn
            color="#a55c1b"
            text
            @click="dialog = false, setLocalStorageValue()"
          >
            Stäng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
        }
    },
    methods: {
      setLocalStorageValue() {
        localStorage.setItem('showModal',true)
      }
    }
}
</script>

<style>

</style>