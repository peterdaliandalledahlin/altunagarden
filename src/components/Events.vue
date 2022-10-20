<template>
    <v-container id="events">
        <h3>Aktuellt</h3>
        <v-row>   
            <v-col v-for="event in events" :key="event.id" cols="12" sm="4">
                <v-card elevation="3" height="100%" class="mb-2">
                    <v-container fluid>
                        <v-layout column>
                            <v-flex class="mb-2 text-h6">{{ event.title.rendered }}</v-flex>
                            <v-flex class="mb-2 text-caption">Upplagd: {{ event.date.slice(0,event.date.length-9) }}</v-flex>
                            <v-flex class="text-body-1" v-html="event.content.rendered"></v-flex>
                        </v-layout>
                    </v-container>
                </v-card>  
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'events',
    data() {
        return {
            events: []
        }
    },
    methods: {
        getEvents (e) {
            axios.get('https://altunagarden.se/wordpress/wp-json/wp/v2/posts')
            .then((res) => {
                //console.log(res.data)
                this.events = res.data
            }).catch(err => console.log(err))
        },  
    },
    mounted() {
        this.getEvents()
    }
}
</script>

<style scoped>
.flex.text-body-1 >>> a {
    color: rgb(165, 92, 27);
}
.v-card {
    border: 3px solid;
    padding: 10px;
    border-image-source: linear-gradient(45deg, #000000,#a55c1b);
    border-image-slice: 1;
}
.text-caption {
    color: #b3b3b3;
}
.text-body-1 {
  font-size: clamp(.8rem, 2vw, 1rem) !important;
}
.text-h6 {
    font-size: clamp(1rem, 2vw, 1.25rem) !important;    
}
</style>