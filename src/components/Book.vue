<template>
    <v-container id="book">
        <h3>Uthyrning av Altunagården</h3>
        <v-banner
            two-line
        >
            <v-icon
            slot="icon"
            size="36"
            >
            mdi-calendar-range
            </v-icon>
            Telefonnummer till lokalbokningen: <a :class="{'card-link white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" href="tel:0736260079">073-626 00 79</a> (Lisa svarar)
        </v-banner>
        <v-banner
            two-line
        >
            <v-icon
            slot="icon"
            size="36"
            >
            mdi-email
            </v-icon>
                Vill du hellre skicka en förfrågan via e-post så är adressen <a :class="{'card-link white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" href="mailto:lisa@ekehult.se">lisa@ekehult.se</a>
        </v-banner>
        <v-banner
            two-line
        >
            <v-icon
            slot="icon"
            size="36"
            >
            mdi-form-select
            </v-icon>
                Vill du du skicka en fråga direkt via vårt formulär så går det också bra. <a :class="{'card-link white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" href="#contact">Klicka här!</a>
        </v-banner>
        <v-banner
            two-line
        >
            <v-icon
            slot="icon"
            size="36"
            >
            mdi-human-wheelchair
            </v-icon>
                Behöver ni utrymmen så har vi lokalerna. Vi har fullständig anpassning för funktionshindrade – rullstolsramp,  handikapptoalett etc.
        </v-banner>
        <h3 class="my-3">Vi har lokaler för t.ex:</h3>
        <v-card
            class="mx-auto gradient"
            tile
        >
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-cake-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Födelsedagskalas</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-ring</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Bröllopsfester</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-coffin</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Begravningskaffe</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-music-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Kulturevenemang</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-palette-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Kurser</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Möten</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'book',
}
</script>

<style scoped>
.gradient::before {
    content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: linear-gradient(to bottom right,#000000,#a55c1b);
	opacity: .6; 
  }
</style>