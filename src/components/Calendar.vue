<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
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
        <v-card-title>Kalendarium 2023</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
            <p>Föreningen Altunagården</p>
            <ul>
                <li>13 januari, PUB 13, pubkväll i bygdegården när den 13 infaller på en fredag. Vi bjuder in medlemmar till ett enkelt samkväm.</li>
                <li>11 februari 13.00 Altunagården, årsmöte, sker tillsammans med Dragmansbosjöns våtmarksförening och Altuna hembygdsförening.</li>
                <li>19 mars, Konsert Quilty och Andy Irvine</li>
                <li>30 april, Valborgsfirande, bjuder in allmänheten till en majbrasa. Föreningen säljer fika och korv med bröd. Barnen får godis.</li>
                <li>Augusti, Fjärdhundralands rebusrunda</li>
                <li>November - Träning inför lucia</li>
                <li>December - Luciatåg i bygdegården</li>
            </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Stäng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: 'calendar',
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
    setValue: function() {
        this.dialog = true
    }
  }
}
</script>

<style>

</style>