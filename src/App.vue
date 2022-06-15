<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Altunagården
          </v-list-item-title>
          <v-list-item-subtitle>
            ...en mötesplats för alla.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="$vuetify.goTo(item.link, drawer = false,  {duration: 500, easing: 'easeInOutCubic'})">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense nav>
        <v-list-item
          link
          href="https://www.facebook.com/Altunagarden/"
          target="_blank"
          @click="drawer = false"
        >
          <v-list-item-icon>
            <v-icon>mdi-facebook</v-icon>
          </v-list-item-icon>
          <v-list-item-content> 
            <v-list-item-title>Facebook</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="click"
        >
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content> 
            <v-list-item-title>Kalendarium</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Altunagården</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Jumbotron />
      <Weather />
      <Book class="my-16" />
      <Pricelist class="my-16" />
      <Events class="my-16" />
      <Membership class="my-16" />
      <Sponsorship class="my-16" />
      <Sponsors class="my-16" />
      <Activities class="my-16" />
      <Links class="my-16" />
      <Map class="my-16" />
      <Contact class="my-16" />
      <Gallery class="my-16" />
      <Timeline class="my-16" />
      <Download class="my-16" />
      <Footer />
    </v-main>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <Modal />
    <Calendar ref="childComponent" />
  </v-app>
</template>

<script>
import Jumbotron from './components/Jumbotron.vue'
import Weather from './components/Weather.vue'
import Book from './components/Book.vue'
import Pricelist from './components/Pricelist.vue'
import Events from './components/Events.vue'
import Membership from './components/Membership.vue'
import Sponsorship from './components/Sponsorship.vue'
import Sponsors from './components/Sponsors.vue'
import Activities from './components/Activities.vue'
import Links from './components/Links.vue'
import Map from './components/Map.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import Timeline from './components/Timeline.vue'
import Download from './components/Download.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import Calendar from './components/Calendar.vue'
  export default {
    components: {
      Jumbotron,
      Weather,
      Book,
      Events,
      Membership,
      Map,
      Contact,
      Timeline,
      Gallery,
      Sponsorship,
      Sponsors,
      Links,
      Download,
      Footer,
      Pricelist,
      Activities,
      Modal,
      Calendar,
      'child-component': Calendar
    },
    data() { 
      return {
        fab: false,
        drawer: null,
        items: [
          { title: 'Hem', icon: 'mdi-home', link: '#home' },
          { title: 'Boka', icon: 'mdi-calendar-range', link: '#book' },
          { title: 'Prislista', icon: 'mdi-cash-100', link: '#pricelist' },
          { title: 'Aktuellt', icon: 'mdi-bell-ring', link: '#events'  },
          { title: 'Aktiviteter', icon: 'mdi-human-female-dance', link: '#activities' },
          { title: 'Sponsring', icon: 'mdi-cash-100', link: '#sponsorship' },
          { title: 'Sponsorer', icon: 'mdi-cash-100', link: '#sponsors' },
          { title: 'Hitta till oss', icon: 'mdi-map-marker', link: '#find-us' },
          { title: 'Kontakta oss', icon: 'mdi-account-box', link: '#contact' },
          { title: 'Galleri', icon: 'mdi-view-gallery', link: '#gallery' },
          { title: 'Tidslinje', icon: 'mdi-timeline', link: '#timeline' },
          { title: 'Ladda ner', icon: 'mdi-file-download', link: '#download' },
        ],
      } 
    },
    methods: {
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
      },
      click: function() {
        this.$refs.childComponent.setValue();
    }
      // toggleTheme() {
      //   this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      // }
    },
  }
</script>

<style>
/* @import "https://unpkg.com/open-props";
@import "https://unpkg.com/open-props/normalize.min.css"; */
</style>
