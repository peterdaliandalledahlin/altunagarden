<template>
    <v-container id="timeline">
      <h3>Tidslinje Altunagården</h3>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <p v-if="!readMore[year.year]">{{year.content.substring(0, 200) + "..."}}</p>
              <p v-if="readMore[year.year]">{{year.content}}</p>
              <v-btn @click="showMore(year.year)" v-if="!readMore[year.year]" class="btn btn-primary">Show more</v-btn>
              <v-btn @click="showLess(year.year)" v-if="readMore[year.year]" class="btn btn-primary">Show less</v-btn>
            </div>
          </v-timeline-item>
      </v-timeline>
    </v-container>
</template>

<script>
export default {
    name: 'timeline',
    data() {
        return {
          readMore: {},
            years: [
                {
                color: 'cyan',
                year: '1953',
                content: ''
                },
                {
                color: 'cyan',
                year: '1952',
                content: ''
                },
                {
                color: 'cyan',
                year: '1951',
                content: ''
                },
                {
                color: 'cyan',
                year: '1950',
                content: 'Biograf! Berättat av Sven-Olov Lundqvist: Jag tror att det var hösten 1950 som bion startade. Jag var med på allra första föreställningen. Det var vaktmästaren Tore Ramsell som var biografföreståndare, och han hade hjälp av Nils Ramsell. Det gick inte alls bra för de fick inte igång filmapparaten. De försökte i en halvtimme, sen ringde de efter Helge Lindholm, som körde film i Godtemplarlokalen i Fjärdhundra. Han kom så småningom, men inte ens han lyckades. Efter flera försök fick vi åka hem utan att ha fått se filmen, men med löftet att nästa onsdag skulle vi få se filmen gratis. Den gången gick det bättre. Helge Lindholm var med och allt fungerade bra. Bion gick bra och det blev cirka 25 föreställningar per år. Varje onsdag kl. 19.00 från september till april. Ansvariga för bion var alltid vaktmästaren. 1950-57 var det Tore Ramsell, 1957-61 var det Margit och Tore Gran och 1961-62 var det jag själv, Sven-Olov Lundqvist. Jag blev vaktmästare hösten 1961 och fick ansvaret att köra filmapparaten. Det var ett komplicerat uppdrag. Det började med att Högsberg Buss hämtade en trälåda någonstans i Enköping. De körde ju linjen Enköping – Ådalen flera gånger i veckan. De lade lådan i diket vid parkeringen och vid 18-tide tar jag lådan till biorummet. I lådan ligger fem rullar film. En var reklamfilmerna, och övriga fyra var själva filmen, uppdelad i fyra akter. Det var två stora rullar på filmapparaten, och dit spolade jag först akt 2, sedan akt 1 och sist reklamrullen. På den andra rullen spolades akt 4 och sen akt 3. När detta var klart kollade jag hur många besökare som kommit. Det var Thea och Roland Stråle som var ansvariga för biljettförsäljningen. Kl 19.00 kördes filmen igång. Filmapparaten var av äldre modell med kolstavar som ljus. Efter ca 50 minuter var första rullen slut, så då gjordes en paus på tio minuter. Jag bytte rulle, och efter paus kördes resten. En hel föreställning tog cirka två timmar. Sen var det bara att spola alla akter bakåt till originalrullarna, packa lådan och åka med den till Högsbergs garage. När TV:n började komma in i alla hem i början på sextiotalet blev det snabbt färre biobesökare. Styrelsen beslöt att sluta med bioföreställningar våren 1962. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Oskar Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor:	E. Liljestrand Ur protokollet 1950: Hr Hallgren opponerade sig mot att hyrorna äro för billiga, vilket föranledde mötet uppdraga åt styrelsen att ytterligare utreda hyresfrågan. En opposition från Hr Alm över garderoben, vilken är liten och opraktiskt inrättad, föranledde mötet tillsätta en komitté bestående av Valter Johansson. Artur Andersson, Nils Gran och Tore Ramsell, vilka har till uppgift att på lämpligaste sätt omändra garderoben. Beslöts uppdraga åt sekreteraren att framlägga ett principuttalande till ordningsvakterna innehållande regler och anvisningar rörande vakthållningen i lokalen vid offentliga danstillställningar.'
                },
                {
                color: 'cyan',
                year: '1949',
                content: 'Byggmästaren går i konkurs i mars. Invigning 4 december klockan 14.00 förättas av landshövding Conrad "Konke" Jonsson. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor:	E. Liljestrand Ur protokollet 1949: Vid granskning av byggnadsritningen framkom att ett rum i källarvåningen saknade ingång. Mötet beslöt att hos arkitekten framföra en önskan om upptagandet av en dörr. Från ett styrelsemöte 1949: Styrelsen hade besök av ombudsmannen för Svenska Folkbiograferna, som efter att ha besett bygdegården lämnade en del intressanta upplysningar, samt lovade översända en beskrivning med prisuppgift å en begagnad, men genomgången och i gott skick varande, biografmaskin.'
                },
                {
                color: 'cyan',
                year: '1948',
                content: 'Bygglov beviljas 23 september 1948. Andelsförening bildas, "ALTUNA ELEKTRISKA DISTRIBUTIONSFÖRENING". Styrelsen för föreningen Altuna Bygdegård ber att till kompletering av vår ansökan få meddela följande. Annandag jul 1939 nedbrann ett i socknen befintligt ordenshus, varvid lokalens vaktmästare innebrändes. Utom Godtemplarlogen använde sig ortens andra föreningar av detsamma, och en tillbyggnad var planerad. Verksamheten ansågs även långt utanför vår egen ort vara av föredömligt slag vilket bl.a. dåvarande ledaren för folkbildningsverksamheten i länet, rektor Andrén, säkert gärna intygar. Efter detta har ortens föreningar varit hemlösa och levat endast med svagt liv. En kulturell utarmning kan konstateras och tråkighet på landsbygden har blivit till något mera än ett slagord.Vi har exempel på ungdom som flyttat härifrån av denna orsak. T.o.m. Från arbetsförmedling de nekats taga plats hit av samma skäl. År 1942 uppkom ett förslag om en bygdegård vari alla ortens föreningar jämte Altuna kommun skulle vara delägare. Detta förutsatte ett rätt stort företag och det har tagit tid att få ihop tillräckligt stort grundkapital för att företaget skulle kunna startas på sund finansiell basis. Numera har vi dock kommit så långt, att förutsatt att vi får lån och anslag ur statens nämnd för samlingslokaler med halva summan är den andra hälften i det närmaste säkrad utan ytterligare skuldsättning. En rymlig tomt har skänkts till föreningen på central plats. Det skulle vara av värde för oss om vi kunde få byggnadstillstånd för innevarande år för att kunna utföra en del arbete på tomten och göra grunden i ordning, skaffa en del material e.t.c. För att kunna starta i god tid nästa år och bli färdiga innan senhösten kommer med fukt och otjänlig väderlek. Arbetskraft finnes inom orten. Altuna den 23:e maj 1948 Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor: E. Liljestrand Ur protokollet: Ordförande Axel Andersson meddelade att byggnadstillstånd beviljats, samt uppläste meddelandet därom, varav framkom att om byggnationen icke skulle igångsättas med det snaraste finnes risk för byggnadstillståndets indragande. Tidpunkten för byggnationens igångsättande diskuterades, och beslutades enhälligt att byggnadsigångsättandetillstånd skulle sökas för arbetets igångsättande redan i höst. På samma möte beslutades att teckna andelar i Altuna Elektriska Distributionsförening.'
                },
                {
                color: 'cyan',
                year: '1947',
                content: ''
                },
                {
                color: 'cyan',
                year: '1946',
                content: 'Arbetsgrupp bildas för nybyggnation. Ordförande:	Greve Stefan Benzelstierna von Engeström Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Axel Andersson Ledamöter:	O.H. Olsson & Sivert Liljestrand Revisor:	E. Liljestrand Ur föreningens första protokoll: Där upplästes en skrivelse från ordförande i statens nämnd för samlingslokaler, riksdagsman Ernst Eriksson, vari han meddelade att han meddelade att han tillställt byggnadsrådet G. Wejke handlingarna angående Altuna Bygdegård, och att denne gjort erinringar mot byggnadens såväl inre som yttre utformning och även byggkostnaderna. En av honom utarbetad skiss för en bygdegård visades, som av mötet godkändes att ligga till grund för en ny ritning. Förslag gjordes att stora salen borde göras någon meter kortare och istället något bredare än enligt skissen. Dessutom föreslogs att takkonstruktionen skulle bli i vinkel å ena delen av byggnaden. Det senare förslaget godkändes av mötet. Vidare uttalade sig majoriteten för 200 platser i stora salen istället för föreslagna 175. Angående slopandet av läktare, anordnande av studie- eller klubbrum beslöts i enlighet med förslagsskissen.'
                },
                {
                color: 'green',
                year: '1945',
                content: ''
                },
                {
                color: 'pink',
                year: '1944',
                content: ''
                },
                {
                color: 'amber',
                year: '1943',
                content: ''
                },
                {
                color: 'orange',
                year: '1942',
                content: 'Heby tegelbruk skänker mark för att gagna bygden. 10 års respit på marken vid Flosta. Berättat av Sven-Olov Lundqvist: Gräva grund och parkering. Efter branden 1939 i Godtemplarlokalen i Fröslunda stod Altuna socken utan samlingslokal. Efter några år bildades föreningen Altuna Bygdegård U.P.A. Styrelsen tog hjälp av ett bolag som hette LTK, som länsstyrelsen startat, och som hade till uppgift att utveckla länet. De hade olika experter, bl.a. en för bostäder och samlingslokaler. Den mannen hjälpte till med projekteringen. Heby Tegelverk, som ägde Flosta gård, skänkte den 13:e januari 1944 tomtmarken till föreningen, för att den skulle kunna bygga en samlingslokal. När projekteringen var klar skulle grunden grävas. Heby Tegelverk, som hade lertag på andra sidan vägen, åtog sig grävningen, men de ville ha hjälp av frivilliga. Det var många starka karlar som anmälde sig att gräva gratis. Ytan som skulle grävas var ca 500 kvadratmeter, och det skulle grävas till 2 m djup, så det blev kring 1000 kubikmeter jord. De började gräva i mitten till fullt djup och lade jorden på plankor. När lastbilen kom skottade man upp jorden från plankorna till lastbilen, så man lyfte alltså all jord två gånger. Man jobbade hela tiden i två arbetslag. När lokalen var färdigbyggd skulle parkeringen göras i ordning. All matjord skulle bort och grus fyllas på. All jord tömdes i backen framför lokalen. Gunnar Andersson och Gustav Almblad åtog sig att göra jobbet. De fick låna häst, plog och en tippbar vinkelaxelkärra i Flosta. Lönen var 2:50 kr i timmen. Gruset hämtades i Vilstena och kördes av Nils Ramsell och Herman Nilsson. När man projekterade Altunagården skulle där finnas en bastu med särskilt rum för badkar. På den tiden var man inte så noga med hygienen. Ett talesätt var ”Man badar en gång om året – till Jul, vare sig det behövs eller inte”. Men nu skulle hygienen bli bättre bland Altunaborna. Bastubadet gick till så här: Man tvättade sig i plåtbalja och sköljde sig genom att hälla vattnet över huvudet. Sen in i bastun ungefär 15 minuter, så ut igen för att fylla baljan och hälla den över huvudet.'
                },
                {
                color: 'orange',
                year: '1941',
                content: 'Altuna bygdegårdsförening bildas.'
                }
            ],
        }
    },
    methods: {
    showMore(year) {
        this.$set(this.readMore, year, true);
    },
    showLess(year) {
        this.$set(this.readMore, year, false);
    },
  }
}
</script>

<style>

</style>