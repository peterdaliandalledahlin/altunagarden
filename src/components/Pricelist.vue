<template>
  <v-container id="pricelist">
      <h3>Prislista</h3>
        <v-card
            class="mx-auto"
            tile
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Lilla salen inkl. kök (max 25 personer)</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-badge color="primary" inline content="500:-/12 tim (350:- medlem)"></v-badge>
                        <v-badge color="primary" inline content="300:-/6 tim (200:- medlem)"></v-badge>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Stora salen inkl kök (max 150 pers)</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-badge color="primary" inline content="2000:-/24 tim (1500:- medlem)"></v-badge>
                        <v-badge color="primary" inline content="1000:-/6 tim (700:- medlem)"></v-badge>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Porslin för bruk på annan plats än Altunagården (obs. endast medlemmar)</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-badge color="primary" inline content="250:- (färre än 50 kuvert)"></v-badge>
                        <v-badge color="primary" inline content="500:- (fler än 50 kuvert)"></v-badge>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-banner
            one-line
            class="text-h6"
        >
            <v-icon
            slot="icon"
            color="red"
            size="36"
            >
            mdi-alert
            </v-icon>
            Förskottsbetalning gäller vid all uthyrning!
        </v-banner>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-list-item__content {
    padding: 0 !important;
}
</style>