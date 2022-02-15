<template>
  <v-container id="sponsors">
      <h3 class=" mb-3">Följande företag har sponsrat, eller på ett eller annat sätt bidragit till bevarandet av Altunagården!</h3>
      <v-card
        max-width="500"
        :class="{'mx-auto' : $vuetify.breakpoint.xs}"
    >
        <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.id"
            :href="item.link"
            target="_blank"
            rel="noopener"
        >
            <v-list-item-icon>
            <v-icon
                v-if="item.icon"
                color="green darken-4"
            >
                mdi-cash-100
            </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
        </v-list-item>
        </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { id: 1, icon: true, link: 'https://www.abkarlhedin.se/bygghandel/karta/enkoping/', title: 'AB Karl Hedin', avatar: require('../assets/images/abkarlhedin.webp') },
          { id: 2, icon: true, link: 'https://ackes-fargcenter.nordsjoidedesign.se/', title: 'Ackes Färgcenter', avatar: require('../assets/images/ackes.webp') },
          { id: 3, icon: true, link: 'https://www.elgiganten.se/', title: 'Elgiganten, Enköping', avatar: require('../assets/images/elgiganten.webp') },
          { id: 4, icon: true, link: 'https://google.se/', title: 'Ena Golv AB', avatar: require('../assets/images/enagolv.webp') },
          { id: 5, icon: true, link: 'https://google.se/', title: 'Enköpings Bygg & Inredning', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { id: 6, icon: true, link: 'https://www.gf100.se/', title: 'Grillby & Fjärdhundra Rör AB', avatar: require('../assets/images/gf100.webp') },
          { id: 7, icon: true, link: 'http://www.glastjanstab.se/', title: 'Enköpings Glastjänst AB', avatar: require('../assets/images/enkopingsglastjanst.webp') },
          { id: 8, icon: true, link: 'https://google.se/', title: 'Fröslunda Ekogård', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { id: 9, icon: true, link: 'https://hygienteknik.se/', title: 'Hygienteknik AB, Västerås', avatar: require('../assets/images/hygienteknik.webp') },
          { id: 10, icon: true, link: 'https://www.jannesgolv.nu/', title: 'Jannes Golv, Enköping', avatar: require('../assets/images/jannesgolv.webp') },
          { id: 11, icon: true, link: 'https://joshyr.se/', title: 'Josefssons Maskinuthyrning AB', avatar: require('../assets/images/josefssons.webp') },
          { id: 12, icon: true, link: 'https://www.tkgolv.se/', title: 'TK Golv, Enköping', avatar: require('../assets/images/tkgolv.webp') },
          { id: 13, icon: true, link: 'https://google.se/', title: 'Golv & Kakelspecialisten i Enköping AB', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { id: 14, icon: true, link: 'https://yp.se/', title: 'YP Yrkesbutiker, Enköping', avatar: require('../assets/images/yp.webp') },
        ],
      }
    },
}
</script>

<style>

</style>