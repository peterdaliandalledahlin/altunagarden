<template>
    <v-container id="timeline">
      <h3 @click="$vuetify.goTo('#contact', {duration: 500, easing: 'easeInOutCubic'})">Tidslinje Altunagården. Har du kompletterande uppgifter till tidslinjen, kontakta Ordförande Lisa Ekehult</h3>
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
              <p v-if="!readMore[year.year] && $vuetify.breakpoint.xs" v-show="year.content">{{year.content.substring(0, 20) + "..."}}</p>
              <p v-if="!readMore[year.year] && $vuetify.breakpoint.sm" v-show="year.content">{{year.content.substring(0, 100) + "..."}}</p>
              <p v-if="!readMore[year.year] && $vuetify.breakpoint.md" v-show="year.content">{{year.content.substring(0, 200) + "..."}}</p>
              <p v-if="!readMore[year.year] && $vuetify.breakpoint.lg" v-show="year.content">{{year.content.substring(0, 300) + "..."}}</p>
              <p v-if="!readMore[year.year] && $vuetify.breakpoint.xl" v-show="year.content">{{year.content.substring(0, 400) + "..."}}</p>
              <p v-if="readMore[year.year]">{{year.content}}</p>
              <v-btn @click="showMore(year.year)" v-if="!readMore[year.year]" v-show="year.content" class="btn btn-primary">Läs mer</v-btn>
              <v-btn @click="showLess(year.year)" v-if="readMore[year.year]" class="btn btn-primary">Läs mindre</v-btn>
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
                color: '#a55c1b',
                year: '2022',
                content: 'Uppdatering av webbsidan.'
                },
              {
                color: '#a55c1b',
                year: '2021',
                content: 'Ny webbsida presenteras.'
                },
              {
                color: '#a55c1b',
                year: '2020',
                content: 'Dalkarlsvandrarna (inställt p.g.a. covid-19). Nytt avlopp grävs 2019-2020. Nytt värmesystem installeras. Luft/vattenvärmepump.'
                },
              {
                color: '#a55c1b',
                year: '2019',
                content: 'Altunagården 70 år! Firades med besök av landshövding Göran Enander, Uppsala län, samt luciatåg. Föreningen Fjärdhundraland får stora turismpriset, föreningen Altunagården är en del av Fjärdhundraland. Bygdegården får en upprustning interiört.'
                },
              {
                color: '#a55c1b',
                year: '2018',
                content: 'Bygdegården blir utnämnd till årets bygdegård i Uppsala läns bygdegårdsdistrikt. Dalkarlsvandrarna. Studiecirkel "Altunagårdens historia" bildas. Distriktsstämma.'
                },
              {
                color: '#a55c1b',
                year: '2017',
                content: 'Lägenheten renoveras. Vattenbrunn åtgärdas.'
                },
              {
                color: '#a55c1b',
                year: '2016',
                content: 'Dalkarlsvandrarna'
                },
              {
                color: '#a55c1b',
                year: '2015',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2014',
                content: 'Dalkarlsvandrarna. Distriktsstämma. Nytt golv i september.'
                },
              {
                color: '#a55c1b',
                year: '2013',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2012',
                content: 'Dalkarlsvandrarna'
                },
              {
                color: '#a55c1b',
                year: '2011',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2010',
                content: 'Dalkarlsvandrarna'
                },
              {
                color: '#a55c1b',
                year: '2009',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2008',
                content: 'Dalkarlsvandrarna'
                },
              {
                color: '#a55c1b',
                year: '2007',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2006',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2005',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2004',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2003',
                content: 'Dalkarlsvandrarna övernattar i Altunagården.'
                },
              {
                color: '#a55c1b',
                year: '2002',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2001',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '2000',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1999',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1998',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1997',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1996',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1995',
                content: 'Städlag. Altunafesten läggs ner.'
                },
              {
                color: '#a55c1b',
                year: '1994',
                content: 'Sista vaktmästaren flyttar.'
                },
              {
                color: '#a55c1b',
                year: '1993',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1992',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1991',
                content: 'Vävstugan öppnas.'
                },
              {
                color: '#a55c1b',
                year: '1990',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1989',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1988',
                content: 'Året gav ett överskott på 26 560kr. Matservering, vårauktion, två danskvällar, Altunafesten och luciatablå gav tillsammans en intäkt på ca 23 000kr. Inga omkostnader för fastigheten, men en drastisk minskning av antalet uthyrningar till 327 ggr. Läs mer... Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	Lars Ericsson och Kerstin Bergkvist Suppleanter:	Sune Erlandsson, Ingvar Karlsson och Lis-Britt Eriksson Programråd:	Sonja Lundqvist, Inger Wallén, Majvor Karlsson, Gudrun Karlsson, Birgit Alm och Monica Wallén Kommunrepresentanter:	Barbro Alm och Tord Johansson.'
                },
              {
                color: '#a55c1b',
                year: '1987',
                content: 'Medarrangör till Altunafesten i Flosta Hage. Året gav ett överskott, så på kontot fanns ca 43 000kr vid årets slut. Förutom sedvanliga bidrag gav påskauktionen, modevisning, höstdans och luciatablån goda resultat (tillsammans ca 21 500kr). Altunafesten gick precis runt, och gav +/- 0. Lokalen hyrdes ut 454 ggr. Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	Lars Ericsson och Gudrun Kraft Suppleanter:	Sune Erlandsson, Ingvar Karlsson och Kerstin Bergkvist Programråd:	Sonja Lundqvist, Inger Wallén, Gudrun Karlsson, Majvor Karlsson, Ann-Britt Högsberg och Birgit Alm Kommunrepresentanter:	Barbro Alm och Tord Johansson.'
                },
              {
                color: '#a55c1b',
                year: '1986',
                content: 'Året gav ett överskott, så på kontot fanns ca 20 000kr vid årets slut. Förutom sedvanliga bidrag gav påskauktionen, Altunafesten och luciatablån goda resultat (tillsammans ca 25 000kr). Lokalen hyrdes ut 481 ggr, en minskning på grund av neddragningar i Altuna IF. Läs mer... Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	Lars Ericsson och Gudrun Kraft Suppleanter:	Sune Erlandsson, Ingvar Karlsson och Kerstin Bergkvist Programråd:	Sonja Lundqvist, Inger Wallén, Gudrun Karlsson, Majvor Karlsson, Ann-Britt Högsberg och Birgit Alm Kommunrepresentanter:	Barbro Alm och Tord Johansson.'
                },
              {
                color: '#a55c1b',
                year: '1985',
                content: 'Påskauktionen, luciatablån och en EWK-utställning gav mycket bra resultat, men flera andra aktiviteter gav dåliga resultat. Även detta år gick Altunafesten med förlust. Inga omkostnader för reparationer och underhåll på fastigheten det här året. Totalt hyrdes lokalen ut 501 ggr. Läs mer... Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	Lars Ericsson och Gudrun Kraft Suppleanter:	Sune Erlandsson, Ingvar Karlsson och Kerstin Bergkvist Programråd:	Sonja Lundqvist, Inger Wallén, Gudrun Karlsson, Majvor Karlsson, Barbro Alm och Gudrun Kraft Kommunrepresentanter:	Barbro Alm (suppleant Roland Stråhle).'
                },
              {
                color: '#a55c1b',
                year: '1984',
                content: 'Bidrag erhölls från kommunen på 58 566kr och från Anders Perssons donationsfond på 8 980kr. Totalt hyrdes lokalen ut 521 ggr. Trots detta var utgifterna större än intäkterna, och hamnade på 103 139kr. Påskauktion och paketauktion vid luciafesten hjälpte upp en del, men Altunafesten gjorde förlust på grund av dåligt väder. Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	Lars Ericsson och Gudrun Jansson Suppleanter:	Sune Erlandsson, Ingvar Karlsson och Gudrun Kraft Revisor: ? Kommunrepresentanter:	Barbro Alm (suppleant Roland Stråhle).'
                },
              {
                color: '#a55c1b',
                year: '1983',
                content: 'Stora investeringar gjordes i fastigheten, bl.a. ett förbättrat värme- och varmvattenssystem. Bidrag erhölls från kommunen på 58 000kr och från Anders Perssons donationsfond på 8 000kr. Totalt hyrdes lokalen ut 495 ggr, vilket var en ökning. Ordförande:	Sven Olof Lundqvist Vice ordförande:	Stig Karlsson Kassör:	Tord Erlandsson Sekreterare:	Monica Johansson Ledamöter:	? Suppleanter: ? Revisor:	? Revisorsuppleant:	?'
                },
              {
                color: '#a55c1b',
                year: '1982',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1981',
                content: 'Kyrkans miniorer.'
                },
              {
                color: '#a55c1b',
                year: '1980',
                content: 'Altuna IF utnyttjar lokalerna för gymnastik, bordtennis och luftgevärsskytte.'
                },
              {
                color: '#a55c1b',
                year: '1979',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1978',
                content: 'Återinvigning 23 mars efter renoveringen. Luciafest anordnas. Berättat av Sven-Olov Lundqvist: Vid renoveringen 1978 blev all inredning i bastun utbytt, så efter det finns det duschar. Tiden för bastun var varje fredag kl 18 -19.30 för herrar och därefter för damer. Flitiga besökare var Anders Mårts, Bertil och Ture Pettersson, Dragmansbo, Stig och Gunnar Blomkvist, Nyskottet. Det fanns tidigare en bastu i Hårsbäck, men den var till åren kommen redan då. Den lades ner i slutet av 70-talet, och de som badade där besökte istället Altunagården. Bastubadet fortsätter även idag, efter 70 år, men just nu med ganska få badare. Efter renoveringen 1978 måste verksamheten öka, bl.a. med ett luciafirande. Kyrkans miniorer hade lucia som avslutning på sin verksamhet varje år. Nu tog Altunagården över med Britta Johansson och Sonja Lundqvist som ansvariga. Luciatablån blev snabbt populär bland barnen, och det kunde vara upp till 25 barn i tåget, som Lucia, tärnor och tomtar. För att få in pengar till Altunagården ordnades en paketauktion. Varje paket som skänktes fick ett nummer, och motsvarande nummer lades i en skål. Numren auktionerades sen ut. Vi hade många duktiga konstnärer i bygden som skänkte tavlor, porslin och t.ex. fågelbord. En av dem skänkte ett alster varje år till auktionen. Efter något tiotal år var alla konstnärer ”avverkade” så vi fick leta andra vinster. Jag skänkte en slaktad gris, och för att visa upp något för barnen tog jag också med en liten levande gris. Jag hade hållit den i handen varje dag så att den inte skulle vara rädd, och det gick mycket bra. Men när jag kom in med den i lokalen skrek alla barnen högt när de såg den levande grisen. Då blev den så rädd att jag nästan tappade den, men allt slutade bra. Paketauktionen var alltid ett välkommet tillskott till föreningens ekonomi, och brukade ge 3 – 4000 kr varje gång. I slutet av 90-talet tog Eva Blomqvist över ansvaret, men några år in på 2000-talet minskade intresset att delta i tåget. Verksamheten lades ner kring 2006 (?).'
                },
              {
                color: '#a55c1b',
                year: '1977',
                content: 'Renovering'
                },
              {
                color: '#a55c1b',
                year: '1976',
                content: 'Namnbyte från Altuna bygdegårdsförening. Andelsföreningen övergår i ideellförening.'
                },
              {
                color: '#a55c1b',
                year: '1975',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1974',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1973',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1972',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1971',
                content: 'Kommunhopslagning. Enköpingskommun. Området tillhör nu Uppsala län'
                },
              {
                color: '#a55c1b',
                year: '1970',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1969',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1968',
                content: 'Ekonomiska resultatet mycket dåligt med en förlust på 5 529:61 kr. Ett lån har tagits i Wästmanlands Sparbank för att förskottera Hans Johansson för förlusten i driften. Lånet skall amorteras med 250 kr/kvartal plus gällande ränta. Föreningen har varit uthyrd 85 gånger och 14 föreningar har nyttjat den. Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Artur Wallén Kassör:	Birgit Larsson Sekreterare:	Sven Olof Lundkvist Ledamöter:	Börje Grahn Suppleanter:	Valter Johansson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
              {
                color: '#a55c1b',
                year: '1967',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1966',
                content: 'Lokalen har under året varit uthyrd 125 gånger. Beslöts att till kommunalfullmäktige begära tilläggsanslag om 2000 kr för amorteringskostnader. Det diskuterades att söka ett rekonstruktionsbidrag där stat och kommun skall satsa varder 50%. Lokalen skall därför värderas. Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Nils Ramsell Sekreterare:	Sven Olof Lundkvist Ledamöter:	Börje Grahn & Artur Wallén Suppleanter:	Valter Johansson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
              {
                color: '#a55c1b',
                year: '1965',
                content: ''
                },
              {
                color: '#a55c1b',
                year: '1964',
                content: 'Bingo anordnas. Lokalen har under året varit uthyrd 102 gånger. Beslutades att ny flaggstång på 10m skall inköpas. Lottaföreningen har skänkt nya askfat (!). Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Sven Olof Lundkvist Ledamöter:	Börje Grahn & Artur Wallén Suppleanter:	Valter Johansson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
              {
                color: '#a55c1b',
                year: '1963',
                content: 'Ekonomin har nu vänt uppåt, och ett årsresultat på 1 389:03 kr redovisades. En byggnadskommitté utsågs att ansvara för rappning kring fönster, målning av allt yttre trä och grusning av hela planen. Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Sven Olof Lundkvist Ledamöter:	Börje Grahn & Artur Wallén Suppleanter:	Gunnar Eriksson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
              {
                color: '#a55c1b',
                year: '1962',
                content: 'Biografen läggs ned. Biografen diskuterades livligt, och beslut togs om nedläggning vid säsongens slut. Istället skall badet köras varje vecka fr.o.m. skolans början. Beslut togs om golvslipning i lilla och stora salen. En tio år gammal räkning på grus, från bröderna Almblad, skall betalas med 50%. Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Sven Olof Lundkvist Ledamöter:	Börje Grahn & Artur Wallén Suppleanter:	Valter Johansson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
               {
                color: '#a55c1b',
                year: '1961',
                content: 'Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Sven Olof Lundkvist Ledamöter:	Nils Ramsell & Evald Eriksson Suppleanter:	Gunnar Eriksson & Roland Stråhle Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman Här beslöts att stödföreningen skulle återupptagas med en avgift om 5 kr per medlem.'
                },
               {
                color: '#a55c1b',
                year: '1960',
                content: 'Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken  Sekreterare:	Artur Andersson, Ådalen Ledamöter:	Valter Johansson & Börje Grahn Suppleanter:	Sven Olof Lundkvist & H Olsson Revisor:	Sven Lundkvist Revisorsuppleant:	Erik Nyman'
                },
               {
                color: '#a55c1b',
                year: '1959',
                content: 'Diskussion om avstyckning av Altunagårdens tomt togs upp vid årsmötet men förslaget avslogs. Ordförande:	Bertil Andersson, Högsberga Vice ordförande:	Evert Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Artur Andersson, Ådalen Ledamöter:	Nils Ramsell Suppleanter:	Sven Olof Lundkvist, H Olsson Revisor:	Sven Lundkvist Revisorsuppleant:	Roland Stråhle, Flosta På det årsmötet diskuterades bl.a. att stycka av Altunagårdens tomt, som ett sätt att få in pengar, men förslaget avslogs. Nytt lagfartsbevis och begäran att söka statligt bidrag bifölls. Beslöts att Altuna Bygdegård ska utträda ur Bygdegårdarnas Riksförbund.'
                },
               {
                color: '#a55c1b',
                year: '1958',
                content: 'Ekonomisk kris! Stödförening bildas i maj för att rädda Altunagården. Stödföreningen för att rädda Altunagården bildas 28:e maj 1958. Ekonomin var hårt ansträngd och ca 5000 kr saknades. Pastor Geite frågade vad som skulle hända om inte pengarna kunde anskaffas, och på detta svarade Sven Lundkvist att det blir utmätning och eventuellt konkurs. Många förslag diskuterades, bl.a.: Tore Ramsell: ”Att alla föreningar i socknen gemensamt skulle förbinda sig att stödja och hyra Altunagården.” Bertil Andersson: ”Att skicka en insamlingslista till alla innevånare.” Sigvard Alm: ”Att kommunen bör bestrida de pengar föreningen inte själva kan få fram, annars bör Altunagården utbjudas till kommunen.” Stödföreningen fanns till och från kvar de närmaste åren.'
                },
               { 
                color: '#a55c1b',
                year: '1957',
                content: 'Ordförande:	Erik Nyman, Flosta Vice ordförande:	Evald Eriksson, Högsberga Kassör:	Hans Johansson, Nötbacken Sekreterare:	Artur Andersson, Ådalen Ledamöter:	Nils Ramsell Suppleanter:	Sven Wallén Revisor:	Sven Lundkvist Revisorsuppleant:	Bertil Andersson, Högsberga Budgetförslaget för året balanserade på 11 203 kr Hyrorna för gården beslutades under året bli: Dans: 100 kr Kalas: 75 kr Föreningsafton: 50 kr Sammanträden: 30 kr Begravningar med mat: 50 kr Begravningar med kaffe: 30 kr Föreläsningar: 15 kr Lilla salen med kök: 10 kr Lilla salen eller studierum: 5 kr Vaktmästartjänsten ledigförklaras i april 1957, och i augusti utsågs Börje Grahn, Flosta, till vaktmästare.'
                },
               {
                color: '#a55c1b',
                year: '1956',
                content: 'Ordförande:	Tore Ramsell Vice ordförande:	Evald Eriksson Kassör:	Hans Johansson Sekreterare:	Hans Johansson Ledamöter:	Nils Ramsell, Walter Johansson, Sigvard Bertil Andersson & Erik Nyman Suppleanter:	Sven-Olof Lundkvist Revisor:	?'
                },
               {
                color: '#a55c1b',
                year: '1955',
                content: 'Ordförande:	Tore Ramsell Vice ordförande:	Evert Eriksson Kassör:	Hans Johansson Sekreterare:	Hans Johansson Ledamöter:	Nils Ramsell, Walter Johansson, Sigvard Ahlm & Erik Nyman Suppleanter:	Sven Wallén Revisor:	?'
                },
                {
                color: '#a55c1b',
                year: '1954',
                content: 'Ordförande:	Tore Ramsell Vice ordförande:	Evald Eriksson Kassör:	Tore Ramsell Sekreterare:	Hans Johansson Ledamöter:	Walter Johansson Suppleanter:	Algot Cohlin Revisor:	E. Liljestrand'
                },
                {
                color: '#a55c1b',
                year: '1953',
                content: ''
                },
                {
                color: '#a55c1b',
                year: '1952',
                content: 'Försäkringskassa, möteslokal och bastu. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Sigvard Ahlm Sekreterare:	Hans Johansson Ledamöter:	Tore Ramsell & Walter Johansson Suppleanter:	Börje Berg & Evert Eriksson Revisor:	E. Liljestrand'
                },
                {
                color: '#a55c1b',
                year: '1951',
                content: 'Hopslagning av kommuner, FJÄRDHUNDRA kommun bildas. Bibliotek, studierum och festvåning. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Sigvard Ahlm Sekreterare:	Hans Johansson Ledamöter:	Nils Ramsell & Gunnar Lindberg Revisor:	E. Liljestrand'
                },
                {
                color: '#a55c1b',
                year: '1950',
                content: 'Biograf! Berättat av Sven-Olov Lundqvist: Jag tror att det var hösten 1950 som bion startade. Jag var med på allra första föreställningen. Det var vaktmästaren Tore Ramsell som var biografföreståndare, och han hade hjälp av Nils Ramsell. Det gick inte alls bra för de fick inte igång filmapparaten. De försökte i en halvtimme, sen ringde de efter Helge Lindholm, som körde film i Godtemplarlokalen i Fjärdhundra. Han kom så småningom, men inte ens han lyckades. Efter flera försök fick vi åka hem utan att ha fått se filmen, men med löftet att nästa onsdag skulle vi få se filmen gratis. Den gången gick det bättre. Helge Lindholm var med och allt fungerade bra. Bion gick bra och det blev cirka 25 föreställningar per år. Varje onsdag kl. 19.00 från september till april. Ansvariga för bion var alltid vaktmästaren. 1950-57 var det Tore Ramsell, 1957-61 var det Margit och Tore Gran och 1961-62 var det jag själv, Sven-Olov Lundqvist. Jag blev vaktmästare hösten 1961 och fick ansvaret att köra filmapparaten. Det var ett komplicerat uppdrag. Det började med att Högsberg Buss hämtade en trälåda någonstans i Enköping. De körde ju linjen Enköping – Ådalen flera gånger i veckan. De lade lådan i diket vid parkeringen och vid 18-tide tar jag lådan till biorummet. I lådan ligger fem rullar film. En var reklamfilmerna, och övriga fyra var själva filmen, uppdelad i fyra akter. Det var två stora rullar på filmapparaten, och dit spolade jag först akt 2, sedan akt 1 och sist reklamrullen. På den andra rullen spolades akt 4 och sen akt 3. När detta var klart kollade jag hur många besökare som kommit. Det var Thea och Roland Stråle som var ansvariga för biljettförsäljningen. Kl 19.00 kördes filmen igång. Filmapparaten var av äldre modell med kolstavar som ljus. Efter ca 50 minuter var första rullen slut, så då gjordes en paus på tio minuter. Jag bytte rulle, och efter paus kördes resten. En hel föreställning tog cirka två timmar. Sen var det bara att spola alla akter bakåt till originalrullarna, packa lådan och åka med den till Högsbergs garage. När TV:n började komma in i alla hem i början på sextiotalet blev det snabbt färre biobesökare. Styrelsen beslöt att sluta med bioföreställningar våren 1962. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Oskar Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor:	E. Liljestrand Ur protokollet 1950: Hr Hallgren opponerade sig mot att hyrorna äro för billiga, vilket föranledde mötet uppdraga åt styrelsen att ytterligare utreda hyresfrågan. En opposition från Hr Alm över garderoben, vilken är liten och opraktiskt inrättad, föranledde mötet tillsätta en komitté bestående av Valter Johansson. Artur Andersson, Nils Gran och Tore Ramsell, vilka har till uppgift att på lämpligaste sätt omändra garderoben. Beslöts uppdraga åt sekreteraren att framlägga ett principuttalande till ordningsvakterna innehållande regler och anvisningar rörande vakthållningen i lokalen vid offentliga danstillställningar.'
                },
                {
                color: '#a55c1b',
                year: '1949',
                content: 'Byggmästaren går i konkurs i mars. Invigning 4 december klockan 14.00 förättas av landshövding Conrad "Konke" Jonsson. Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor:	E. Liljestrand Ur protokollet 1949: Vid granskning av byggnadsritningen framkom att ett rum i källarvåningen saknade ingång. Mötet beslöt att hos arkitekten framföra en önskan om upptagandet av en dörr. Från ett styrelsemöte 1949: Styrelsen hade besök av ombudsmannen för Svenska Folkbiograferna, som efter att ha besett bygdegården lämnade en del intressanta upplysningar, samt lovade översända en beskrivning med prisuppgift å en begagnad, men genomgången och i gott skick varande, biografmaskin.'
                },
                {
                color: '#a55c1b',
                year: '1948',
                content: 'Bygglov beviljas 23 september 1948. Andelsförening bildas, "ALTUNA ELEKTRISKA DISTRIBUTIONSFÖRENING". Styrelsen för föreningen Altuna Bygdegård ber att till kompletering av vår ansökan få meddela följande. Annandag jul 1939 nedbrann ett i socknen befintligt ordenshus, varvid lokalens vaktmästare innebrändes. Utom Godtemplarlogen använde sig ortens andra föreningar av detsamma, och en tillbyggnad var planerad. Verksamheten ansågs även långt utanför vår egen ort vara av föredömligt slag vilket bl.a. dåvarande ledaren för folkbildningsverksamheten i länet, rektor Andrén, säkert gärna intygar. Efter detta har ortens föreningar varit hemlösa och levat endast med svagt liv. En kulturell utarmning kan konstateras och tråkighet på landsbygden har blivit till något mera än ett slagord.Vi har exempel på ungdom som flyttat härifrån av denna orsak. T.o.m. Från arbetsförmedling de nekats taga plats hit av samma skäl. År 1942 uppkom ett förslag om en bygdegård vari alla ortens föreningar jämte Altuna kommun skulle vara delägare. Detta förutsatte ett rätt stort företag och det har tagit tid att få ihop tillräckligt stort grundkapital för att företaget skulle kunna startas på sund finansiell basis. Numera har vi dock kommit så långt, att förutsatt att vi får lån och anslag ur statens nämnd för samlingslokaler med halva summan är den andra hälften i det närmaste säkrad utan ytterligare skuldsättning. En rymlig tomt har skänkts till föreningen på central plats. Det skulle vara av värde för oss om vi kunde få byggnadstillstånd för innevarande år för att kunna utföra en del arbete på tomten och göra grunden i ordning, skaffa en del material e.t.c. För att kunna starta i god tid nästa år och bli färdiga innan senhösten kommer med fukt och otjänlig väderlek. Arbetskraft finnes inom orten. Altuna den 23:e maj 1948 Ordförande:	Axel Andersson Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Hans Johansson Ledamöter:	O.H. Olsson & Gunnar Lindberg Revisor: E. Liljestrand Ur protokollet: Ordförande Axel Andersson meddelade att byggnadstillstånd beviljats, samt uppläste meddelandet därom, varav framkom att om byggnationen icke skulle igångsättas med det snaraste finnes risk för byggnadstillståndets indragande. Tidpunkten för byggnationens igångsättande diskuterades, och beslutades enhälligt att byggnadsigångsättandetillstånd skulle sökas för arbetets igångsättande redan i höst. På samma möte beslutades att teckna andelar i Altuna Elektriska Distributionsförening.'
                },
                {
                color: '#a55c1b',
                year: '1947',
                content: ''
                },
                {
                color: '#a55c1b',
                year: '1946',
                content: 'Arbetsgrupp bildas för nybyggnation. Ordförande:	Greve Stefan Benzelstierna von Engeström Vice ordförande:	Arvid Hemlin Kassör:	Tore Ramsell Sekreterare:	Axel Andersson Ledamöter:	O.H. Olsson & Sivert Liljestrand Revisor:	E. Liljestrand Ur föreningens första protokoll: Där upplästes en skrivelse från ordförande i statens nämnd för samlingslokaler, riksdagsman Ernst Eriksson, vari han meddelade att han meddelade att han tillställt byggnadsrådet G. Wejke handlingarna angående Altuna Bygdegård, och att denne gjort erinringar mot byggnadens såväl inre som yttre utformning och även byggkostnaderna. En av honom utarbetad skiss för en bygdegård visades, som av mötet godkändes att ligga till grund för en ny ritning. Förslag gjordes att stora salen borde göras någon meter kortare och istället något bredare än enligt skissen. Dessutom föreslogs att takkonstruktionen skulle bli i vinkel å ena delen av byggnaden. Det senare förslaget godkändes av mötet. Vidare uttalade sig majoriteten för 200 platser i stora salen istället för föreslagna 175. Angående slopandet av läktare, anordnande av studie- eller klubbrum beslöts i enlighet med förslagsskissen.'
                },
                {
                color: '#a55c1b',
                year: '1945',
                content: ''
                },
                {
                color: '#a55c1b',
                year: '1944',
                content: ''
                },
                {
                color: '#a55c1b',
                year: '1943',
                content: ''
                },
                {
                color: '#a55c1b',
                year: '1942',
                content: 'Heby tegelbruk skänker mark för att gagna bygden. 10 års respit på marken vid Flosta. Berättat av Sven-Olov Lundqvist: Gräva grund och parkering. Efter branden 1939 i Godtemplarlokalen i Fröslunda stod Altuna socken utan samlingslokal. Efter några år bildades föreningen Altuna Bygdegård U.P.A. Styrelsen tog hjälp av ett bolag som hette LTK, som länsstyrelsen startat, och som hade till uppgift att utveckla länet. De hade olika experter, bl.a. en för bostäder och samlingslokaler. Den mannen hjälpte till med projekteringen. Heby Tegelverk, som ägde Flosta gård, skänkte den 13:e januari 1944 tomtmarken till föreningen, för att den skulle kunna bygga en samlingslokal. När projekteringen var klar skulle grunden grävas. Heby Tegelverk, som hade lertag på andra sidan vägen, åtog sig grävningen, men de ville ha hjälp av frivilliga. Det var många starka karlar som anmälde sig att gräva gratis. Ytan som skulle grävas var ca 500 kvadratmeter, och det skulle grävas till 2 m djup, så det blev kring 1000 kubikmeter jord. De började gräva i mitten till fullt djup och lade jorden på plankor. När lastbilen kom skottade man upp jorden från plankorna till lastbilen, så man lyfte alltså all jord två gånger. Man jobbade hela tiden i två arbetslag. När lokalen var färdigbyggd skulle parkeringen göras i ordning. All matjord skulle bort och grus fyllas på. All jord tömdes i backen framför lokalen. Gunnar Andersson och Gustav Almblad åtog sig att göra jobbet. De fick låna häst, plog och en tippbar vinkelaxelkärra i Flosta. Lönen var 2:50 kr i timmen. Gruset hämtades i Vilstena och kördes av Nils Ramsell och Herman Nilsson. När man projekterade Altunagården skulle där finnas en bastu med särskilt rum för badkar. På den tiden var man inte så noga med hygienen. Ett talesätt var ”Man badar en gång om året – till Jul, vare sig det behövs eller inte”. Men nu skulle hygienen bli bättre bland Altunaborna. Bastubadet gick till så här: Man tvättade sig i plåtbalja och sköljde sig genom att hälla vattnet över huvudet. Sen in i bastun ungefär 15 minuter, så ut igen för att fylla baljan och hälla den över huvudet.'
                },
                {
                color: '#a55c1b',
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