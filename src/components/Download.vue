<template>
  <v-container id="download">
  
        <v-list>
          <v-subheader class="mt-5">Här kan du ladda ner eller titta på dokument i pdf format.</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="item in items"
                :key="item.id"
                :href="item.link"
                target="_blank"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list> 

        <!-- <a href="./dagordningarsmote2021.pdf" target="_blank">Dagordning årsmöte 2021</a> -->
    
    
  </v-container>
</template>

<script>
export default {
  name: "download",
  data() {
    return {
      //selectedItem: 0,
      items: [
        { id: 1, text: 'Dagordning årsmöte 2022', icon: 'mdi-file-pdf-box', link: './dagordningarsmote2022.pdf' },
        { id: 2, text: 'Protokoll 2021', icon: 'mdi-file-pdf-box', link: './protokoll2021.pdf' },
        { id: 3, text: 'Dagordning årsmöte 2021', icon: 'mdi-file-pdf-box', link: './dagordningarsmote2021.pdf' },
        { id: 4, text: 'Protokoll 2019', icon: 'mdi-file-pdf-box', link: './protokoll2019.pdf' },
        { id: 5, text: 'Protokoll 2020', icon: 'mdi-file-pdf-box', link: './protokoll2020.pdf' },
        { id: 6, text: 'Versamhetsberättelse 2020', icon: 'mdi-file-pdf-box', link: './verksamhetsberattelse2020.pdf' },
      ],
    }
  },
};
</script>