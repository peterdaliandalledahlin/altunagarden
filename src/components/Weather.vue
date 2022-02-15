<template>
    <v-container fluid>
        <!-- :style="{backgroundColor: '#97906b'}" -->
        <div class="weather-wrap py-1">
            <!-- <div class="location">Altuna bygdegård</div> -->
            <div class="date" v-show="$vuetify.breakpoint.md">{{ dateBuilder() }}</div>
            <div class="temp" v-if="weather.main.temp != 'undefined'">{{ Math.round(weather.main.temp) }}°C</div>
            <!-- <div class="weather_description" v-show="$vuetify.breakpoint.md">{{ weather.weather[0].description }}</div> -->
            <div class="weather_description">{{ weather.weather[0].description }}</div>
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" :src="require(`@/assets/images/icons/${weather.weather[0].icon}.png`)" alt="weather icon"></v-img>
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" src="../assets/images/sunrise.svg" alt="soluppgång"></v-img>
            <div class="sunrise">{{ weather.sys.sunrise | formatDate }}</div>
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" src="../assets/images/sunset.svg" alt="solnedgång"></v-img>
            <div class="sunrise">{{ weather.sys.sunset | formatDate }}</div> 
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'weather',
    data () {
        return {
            weather: {},
            APIkey: 'a2cbebe3bc93590c1718ca98425f0512',
            lang: 'sv',
            lon: 59.83569031035499,
            lat: 16.92745242449694
        }
    },
    methods: {
        getCurrentWeather (e) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lon}&lon=${this.lat}&units=metric&APPID=${this.APIkey}&lang=${this.lang}`)
            .then((res) => {
                this.weather = res.data
                console.log(this.weather)
                console.log(this.weather.weather[0].icon);
                for (const key in this.weather) {

                //console.log(`${key}: ${this.weather[key]}`)
                //console.log(`${key}: ${this.weather[key]}`)
                }
            }).catch(err => console.log(err))
        },  
        dateBuilder () {
            let d = new Date();
            let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
            let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
        }
    },
    mounted () {
        this.getCurrentWeather()
    }
}
</script>

<style>
.weather-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.invert {
    filter: invert(100%);
}
</style>