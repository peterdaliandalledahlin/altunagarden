<template>
    <v-container id="membership"> 
        <v-banner two-line>
            <v-avatar
            slot="icon"
            size="40"
            >
            <v-icon
                icon="mdi-lock"
                color="white"
            >
                mdi-cash-100
            </v-icon>
            </v-avatar>
                <h4>Vill du bli medlem?</h4>
                Medlemsavgift för 2023 är 100 kronor för enskild och 150 kronor för familj. Betalning kan göras till BG 320-0490 eller via swish 123 578 92 50.
                <p class="text-caption">Kom ihåg att uppge ditt namn, telefonnummer och gärna e-postadress om det finns.</p>
            <template v-slot:actions>
            <v-btn
                text
                @click="$vuetify.goTo('#contact', {duration: 500, easing: 'easeInOutCubic'})"
            >
                Kontakt
            </v-btn>
            </template>
        </v-banner>
    </v-container>
</template>

<script>
export default {
    name: 'membership'

}
</script>

<style>

</style>