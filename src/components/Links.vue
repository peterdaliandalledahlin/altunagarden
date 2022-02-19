<template>
  <v-container id="links">
      <h3>Här nedan finns några länkar till företag och föreningar i bygden.</h3>
      <v-card
        class="mx-auto gradient"
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
            >
                mdi-information
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
  name: 'links',
    data () {
      return {
        items: [
          { id: 1, icon: true, link: 'https://fjardhundraland.se/', title: 'Fjärdhundraland', avatar: require('../assets/images/fjardhundraland.png') },
          { id: 2, icon: true, link: 'https://hembygd.se/altuna-hembygdsforening/', title: 'Altuna Hembygdsförening', avatar: require('../assets/images/hembygd.webp') },
          { id: 3, icon: true, link: 'https://www.bygdegardarna.se/', title: 'Bygdegårdarnas Riksförbund', avatar: require('../assets/images/bygdegardarna.png') },
          { id: 4, icon: true, link: 'https://facebook.com/dragmansbosjon', title: 'Dragmansbosjön', avatar: require('../assets/images/dragmansbosjon.webp') },
        ],
      }
    },
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