<template>
  <v-container id="activities">
      <h3>Aktiviteter</h3>
      <v-row class="mt-3">
            <v-col v-for="activity in activities" :key="activity.id" cols="12" sm="4">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">
                                {{ activity.title}}
                            </v-list-item-title>
                            <div class="text-body-1 mb-4">
                                {{ activity.description}}
                            </div>
                            <v-list-item-subtitle><a :class="{'white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" :href="`tel:${activity.phone1}`">{{activity.phone2}}</a></v-list-item-subtitle>
                            <v-list-item-subtitle><a :class="{'white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" :href="`mailto:${activity.email}`">{{activity.email}}</a></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-avatar>
                            <v-icon dark>
                                {{ activity.icon}}
                            </v-icon>
                        </v-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn
                        @click="$vuetify.goTo(activity.link, {duration: 500, easing: 'easeInOutCubic'})"
                        outlined
                        rounded
                        text
                    >
                        Kontakta
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'activities',
    data() {
        return {
            activities: [
                { id: 1, link: '#contact', icon: 'mdi-radiator', title: 'Bastu', description: 'Bygdegårdens bastu hålls öppen och varm för allmänheten på fredagar. Ingång på baksidan. Herrar: 18:00-20:00 Damer: 20:00-21:00 Pris: 25:-/person (kan betalas med SWISH 123-578 92 50)För tillfället badar inga damer, men intresserade är varmt välkomna att höra av sig till Roine Kreivi, 070-690 10 50', phone1: '+46706901050', phone2: '070-690 10 50', email: 'lisa@ekehult'},
                { id: 2, link: '#contact', icon: 'mdi-pistol', title: 'Luftgevärsskytte', description: 'Tisdagkvällar - för barn och ungdomar. Vid intresse, kontakta Per Vestin, 070-896 49 47', phone1: '+46708964947', phone2: '070-896 49 47', email: 'per@panhard.se'},
                { id: 3, link: '#contact', icon: 'mdi-alpha-v-circle', title: 'Vävstuga', description: 'Är du sugen på att väva?', phone1: '+46736260079', phone2: '073-626 00 79', email: 'lisa@ekehult.se'},
                { id: 4, link: '#contact', icon: 'mdi-information', title: 'Övrigt', description: 'Har du andra ideér bygdegården skulle kunna användas till, kontakta oss. Förutom ovanstående aktiviteter så finns även möjlighet att spela bordtennis.', phone1: '+46736260079', phone2: '073-626 0079', email: 'lisa@ekehult.se' }
            ],
        }
    },
}
</script>

<style>

</style>