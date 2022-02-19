<template>
    <v-container fluid class="container-shadow">
        <!-- :style="{backgroundColor: '#97906b'}" -->
        <div class="weather-wrap py-1">
            <div class="date" v-show="$vuetify.breakpoint.md">{{ dateBuilder() }}</div>
            <div class="temp" v-if="temp != 'undefined'">{{ Math.round(temp) }}°C</div>
            <!-- <div class="weather_description" v-show="$vuetify.breakpoint.md">{{ weather.weather[0].description }}</div> -->
            <div class="weather_description">{{ description }}</div>
            <!-- <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" :src="require(`@/assets/images/icons/${icon}.png`)" alt="weather icon"></v-img> -->
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" :src="`http://openweathermap.org/img/w/${icon}.png` " alt="weather icon"></v-img>
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" :src="require('@/assets/images/sunrise.svg')" alt="soluppgång"></v-img>
            <div class="sunrise">{{ sunrise | formatDate }}</div>
            <v-img :class="{'invert' : $vuetify.theme.dark}" max-height="25" max-width="25" :src="require('@/assets/images/sunset.svg')" alt="solnedgång"></v-img>
            <div class="sunrise">{{ sunset | formatDate }}</div> 
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'weather',
    data () {
        return {
            //images: [],
            //weather: {},
            temp: '',
            description: '',
            icon: '',
            sunrise: '',
            sunset: '',
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
                this.temp = res.data.main.temp
                this.description = res.data.weather[0].description
                this.icon = res.data.weather[0].icon
                //console.log(res.data.weather[0].icon)
                this.sunrise = res.data.sys.sunrise
                this.sunset = res.data.sys.sunset
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
        },

        // defineIcon() {
        //     if (this.icon = '01d') {
        //         this.icon = this.images[0].pathShort
        //     }
        //     else if(this.icon = '01n') {
        //         this.icon = this.images[1].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '02d') {
        //         this.icon = this.images[2].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '02n') {
        //         this.icon = this.images[3].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '03d') {
        //         this.icon = this.images[4].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '03n') {
        //         this.icon = this.images[5].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '04d') {
        //         this.icon = this.images[6].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '04n') {
        //         this.icon = this.images[7].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '09d') {
        //         this.icon = this.images[8].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '09n') {
        //         this.icon = this.images[9].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '10d') {
        //         this.icon = this.images[10].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '10n') {
        //         this.icon = this.images[11].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '11d') {
        //         this.icon = this.images[12].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '11n') {
        //         this.icon = this.images[13].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '13d') {
        //         this.icon = this.images[14].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '13n') {
        //         this.icon = this.images[15].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '50d') {
        //         this.icon = this.images[16].pathShort.split('.').join("");
        //     }
        //     else if(this.icon = '50n') {
        //         this.icon = this.images[17].pathShort.split('.').join("");
        //     }
        //     else {
        //         this.icon = this.images[10].pathShort.split('.').join('')
        //     }
        //     // switch(this.icon) {
        //     //     case '01d':
        //     //     this.icon = this.images[0].pathLong;
        //     //     break;
        //     //     case '01n':
        //     //     this.icon = this.images[1].pathLong;
        //     //     break;
        //     //     case '02d':
        //     //     this.icon = this.images[2].pathLong;
        //     //     break;
        //     //     case '02n':
        //     //     this.icon = this.images[3].pathLong;
        //     //     break;
        //     //     case '03d':
        //     //     this.icon = this.images[4].pathLong;
        //     //     break;
        //     //     case '03n':
        //     //     this.icon = this.images[5].pathLong;
        //     //     break;
        //     //     case '04d':
        //     //     this.icon = this.images[6].pathLong;
        //     //     break;
        //     //     case '04n':
        //     //     this.icon = this.images[7].pathLong;
        //     //     break;
        //     //     case '09d':
        //     //     this.icon = this.images[8].pathLong;
        //     //     break;
        //     //     case '09n':
        //     //     this.icon = this.images[9].pathLong;
        //     //     break;
        //     //     case '10d':
        //     //     this.icon = this.images[10].pathLong;
        //     //     break;
        //     //     case '10n':
        //     //     this.icon = this.images[11].pathLong;
        //     //     break;
        //     //     case '11d':
        //     //     this.icon = this.images[12].pathLong;
        //     //     break;
        //     //     case '11n':
        //     //     this.icon = this.images[13].pathLong;
        //     //     break;
        //     //     case '13d':
        //     //     this.icon = this.images[14].pathLong;
        //     //     break;
        //     //     case '13n':
        //     //     this.icon = this.images[15].pathLong;
        //     //     break;
        //     //     case '50d':
        //     //     this.icon = this.images[16].pathLong;
        //     //     break;
        //     //     case '50n':
        //     //     this.icon = this.images[17].pathLong;
        //     //     break;
        //     //     default:
        //     //     this.icon = this.images[18].pathLong;
        //     // }
        //     //return this.icon
        // },
    },
    mounted () {
        this.getCurrentWeather()
    }
}
</script>

<style>
.container-shadow {
    box-shadow: 0 4px 2px -2px gray !important;
    -moz-box-shadow: 0 4px 2px -2px gray !important;
    -moz-box-shadow: 0 4px 2px -2px gray !important;
}
.weather-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.invert {
    filter: brightness(0) invert(1);
}
</style>