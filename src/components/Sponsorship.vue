<template>
    <v-container id="sponsorship">
        <h3 class="mb-5">Sponsorpaket Altunagården</h3>
        
                <v-card
                    class="mx-auto mb-2"
                >
                    <v-card-text>
                    <div>Paket</div>
                    <p class="text-h4 text--primary">
                        Femhundringen
                    </p>
                    <p>el·ee·mos·y·nar·y</p>
                    <div class="text--primary">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution."
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="#9A8578"
                        @click="revealFemhundringen = true"
                    >
                        Läs mer...
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if="revealFemhundringen"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                        <p class="text-h5 text--primary">
                            I paketet ingår följande...
                        </p>
                        <p>&#8226; Bjuds på enklare samkväm en gång per år.</p>
                        <p>&#8226; Deltagande i lotteri två gånger per år.</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="#9A8578"
                            @click="revealFemhundringen = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
                <v-card
                    class="mx-auto mb-2"
                >
                    <v-card-text>
                    <div>Paket</div>
                    <p class="text-h4 text--primary">
                        Brons 3000 kr
                    </p>
                    <p>el·ee·mos·y·nar·y</p>
                    <div class="text--primary">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution."
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="#9A8578"
                        @click="revealBronse = true"
                    >
                        Läs mer...
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if="revealBronse"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                            <p class="text-h5 text--primary">
                                I paketet ingår följande...
                            </p>
                            <p>&#8226; Nyttja Altunagården 1 gång per år.</p>
                            <p>&#8226; Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</p>
                            <p>&#8226; Bjuds på enklare samkväm en gång per år.</p>
                            <p>&#8226; Deltar i ett lotteri två gånger per år.</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="#9A8578"
                            @click="revealBronse = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
                <v-card
                    class="mx-auto mb-2"
                >
                    <v-card-text>
                    <div>Paket</div>
                    <p class="text-h4 text--primary">
                        Silver 5000 kr
                    </p>
                    <p>el·ee·mos·y·nar·y</p>
                    <div class="text--primary">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution."
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="#9A8578"
                        @click="revealSilver = true"
                    >
                        Läs mer...
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if="revealSilver"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                            <p class="text-h5 text--primary">
                                I paketet ingår följande...
                            </p>
                            <p>&#8226; Nyttja Altunagården 2 gånger per år.</p>
                            <p>&#8226; Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</p>
                            <p>&#8226; Bjuds på enklare samkväm en gång per år.</p>
                            <p>&#8226; Deltar i ett lotteri två gånger per år.</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="#9A8578"
                            @click="revealSilver = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
                <v-card
                    class="mx-auto"
                >
                    <v-card-text>
                    <div>Paket</div>
                    <p class="text-h4 text--primary">
                        Guld 7000 kr
                    </p>
                    <p>el·ee·mos·y·nar·y</p>
                    <div class="text--primary">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution."
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="#9A8578"
                        @click="revealGold = true"
                    >
                        Läs mer...
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if="revealGold"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                            <p class="text-h5 text--primary">
                                I paketet ingår följande...
                            </p>
                            <p>&#8226; Nyttja Altunagården 3 gånger per år.</p>
                            <p>&#8226;Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</p>
                            <p>&#8226; Bjuds på enklare samkväm en gång per år.</p>
                            <p>&#8226; Deltar i ett lotteri två gånger per år.</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="#9A8578"
                            @click="revealGold = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
            
    </v-container>
</template>

<script>
export default {
    name: 'sponsorship',
    data: () => ({
      revealFemhundringen: false,
      revealBronse: false,
      revealSilver: false,
      revealGold: false,
    }),
}
</script>
<style scoped>
.v-card {
  display: flex !important;
  flex-direction: column;
}
.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
/* .gradient::before {
    content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: linear-gradient(to bottom right,#000000,#a55c1b);
	opacity: .6; 
  } */
</style>
