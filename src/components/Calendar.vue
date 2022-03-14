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
        <v-card-title>Kalendarium 2022</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
            <p>Föreningen Altunagården</p>
            <ul>
                <li>5 mars - Årsmöte - Sker tillsammans med Dragmansbosjönsvåtmarksförening och hembygdsföreningen. Tillsammans är vi starka och kan hjälpa varandra i föreningsarbetet.</li>
                <li>30 april - Valborgsfirande – bjuder in allmänheten till en majbrasa. Föreningen säljer fika och korv med bröd. Barnen får godis.</li>
                <li>13 maj - PUB 13 – pubkväll i bygdegården när den 13 infaller på en fredag. Vi bjuder in medlemmar till ett enkelt samkväm.</li>
                <li>24-25 maj - Dalkarlsvandringen – Altunagården öppnar upp för vandrare som tar sig från Mora till Stockholm. Vi erbjuder logi och middag samt frukost och lunchpaket.</li>
                <li>Juni/Juli - Fotoutställning – planering pågår gällande en utflytt av den utställning som nu pågår på Upplandsmuseet av John Alinders foton till Altunagården. Med stor förhoppning kommer vi att kunna visa en samling av hans bilder i bygdegården under några veckor.</li>
                <li>Juni/Juli - Barnteater – Skottes musikteater kommer tillbaka och gör föreställningen Bockarna Bruse.</li>
                <li>Augusti - Fjärdhundralands rebusrunda</li>
                <li>1 oktober - Dans till Nikitas</li>
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