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
            Telefonnummer till lokalbokningen: <a href="tel:0736260079" class="card-link">073-626 00 79</a> (Lisa svarar)
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
                Vill du hellre skicka en förfrågan via e-post så är adressen <a href="mailto:uthyrning.altunagarden@gmail.com?subject=Mail from website" class="card-link">uthyrning.altunagarden@gmail.com</a>
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
                Vill du du skicka en fråga direkt via vårt formulär så går det också bra. <a href="#contact">Klicka här!</a>
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
            :class="{'mx-auto' : $vuetify.breakpoint.xs}"
            tile
            max-width="300"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Födelsedagskalas</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Bröllopsfester</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Begravningskaffe</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Kulturevenemang</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Kurser</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title><v-icon large color="black">mdi-circle-small</v-icon>Möten</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>