<template>
  <h1>communitynews</h1>
</template>

<script>
import axios from 'axios'
import * as cheerio from 'cheerio';
export default {
    name: 'community-news',
    data() {
        return {
            latestArticles: []
        }
    },
    created(){
        this.getWebsiteData()
    },
    methods: {
        getWebsiteData(){
            let url = 'https://bygdegardarna.se/bygdegardsnyheter/'
            let url2 = 'https://bygdegardarna.se/bygdegardsnyheter/sida/2/'

            axios({
                method: 'get',
                url: url,
                //headers: {'Content-Type': 'application/json',},
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: false,
            })
            .then(function (response) {
                let html = response.data
                const $ = cheerio.load(html)
                console.log($)
            })
        }
    }
}

</script>

<style>

</style>