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
                            <v-flex class="text-body-1">{{ event.content.rendered | stripHTML }}</v-flex>
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

<style>

</style>