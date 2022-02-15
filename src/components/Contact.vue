<template>
    <v-container id="contact">
        <h3>Kontakt</h3>
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
            <form>
                <!-- <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="http://localhost:8085/"> -->
                <!-- formsubmit.co -->
                <validation-provider
                    v-slot="{ errors }"
                    name="name"
                    rules="required|max:10"
                >
                    <v-text-field
                        v-model="name"
                        :counter="10"
                        :error-messages="errors"
                        label="Namn"
                        required
                        name="namn"
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                >
                    <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="E-mail"
                        required
                        name="email"
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="message"
                    rules="required"
                >
                    <v-textarea
                        v-model="message"
                        :error-messages="errors"
                        data-vv-name="description"
                        name="message"
                        label="Ställ din fråga här!"
                        value=""
                        hint="Tex. en bokningsförfråga"
                        required
                    ></v-textarea>
                </validation-provider>

                <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                     @click.prevent="submit"
                >
                    submit
                </v-btn>
                <v-btn @click="clear">
                    clear
                </v-btn>
            </form>
        </validation-observer>
        <v-snackbar
            v-model="snackbar"
            >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-row class="mt-3">
            <v-col v-for="contact in contact" :key="contact.id" cols="12" sm="4">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">
                                {{ contact.title}}
                            </v-list-item-title>
                            <div class="text-overline mb-4">
                                {{ contact.name}}
                            </div>
                            <v-list-item-subtitle><a :class="{'white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" :href="`tel:${contact.phone1}`">{{contact.phone2}}</a></v-list-item-subtitle>
                            <v-list-item-subtitle><a :class="{'white--text' : $vuetify.theme.dark, 'black--text' : $vuetify.theme.light}" :href="`mailto:${contact.email}`">{{contact.email}}</a></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-avatar>
                            <v-icon dark>
                                {{ contact.icon }}
                            </v-icon>
                        </v-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        text
                    >
                        Kontakta
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import { required, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
export default {
    name: 'contact',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            contact: [
                { id: 1, icon: 'mdi-crown-circle', title: 'Ordförande', name: 'Lisa Ekehult', phone1: '+46736260079', phone2: '073-626 00 79', email: 'lisa@ekehult'},
                { id: 2, icon: 'mdi-file-document-edit', title: 'Sekreterare', name: 'Per Westin', phone1: '+46708964947',phone2: '070-896 49 47', email: 'per@panhard.se'},
                { id: 3, icon: 'mdi-cash-100', title: 'Kassör', name: 'Ingrid Tamm', phone1: '+46702838373', phone2: '070-283 83 73', email: 'ninni.tam@gmail.com'},
                { id: 4, icon: 'mdi-account-arrow-left', title: 'Suppleant', name: 'Håkan Wallén', phone1: '+46705296107', phone2: '070-529 61 07', email: 'hakan@sevasta.se'},
                { id: 5, icon: 'mdi-account-arrow-left', title: 'Suppleant', name: 'Kent Möller', phone1: '+46701625436', phone2: '070-162 54 36', email: 'arezzo953@hotmail.com'},
                { id: 6, icon: 'mdi-calculator', title: 'Revisor', name: 'Lars Johansson', phone1: '+46705767763', phone2: '070-576 77 63', email: 'lars.johansson@live.com'},
                { id: 7, icon: 'mdi-account-arrow-left', title: 'Suppleant', name: 'Barbro Vestin', phone1: '+46730765421', phone2: '073-076 54 21', email: 'bw505121@gmail.com'},
                { id: 8, icon: 'mdi-swap-horizontal', title: 'Valberedning', name: 'Eva Blomkvist', phone1: '+46702564217', phone2: '070-256 42 17', email: ''},
                { id: 9, icon: 'mdi-swap-horizontal', title: 'Valberedning', name: 'Mats Melander', phone: '+46707137714', phone: '070-713 77 14', email: ''},
                { id: 10, icon: 'mdi-numeric', title: 'Organisationsnr.', name: '817000-8703', phone1: '', phone2: '', email: ''},
                { id: 11, icon: 'mdi-numeric', title: 'Bankgiro', name: '320-0490', phone1: '', phone2: '', email: ''},
            ],
            snackbar: false,
            text: `Meddelandet är skickat!`,
        }
    },
    methods: {
        submit () {
            this.$refs.observer.validate()
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/lisa@ekehult.se', {
                name: this.name,
                email: this.email,
                message: this.message
            })
            .then((response) => {
                console.log(response)
                if(response.status === 200){
                    this.clear()
                    this.snackbar = true
                }
            })
            .catch(error => console.log(error));
        },
        clear () {
            this.name = ''
            this.email = ''
            this.message = ''
            this.$refs.observer.reset()
        },
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black !important;
    cursor: pointer;
}
</style>