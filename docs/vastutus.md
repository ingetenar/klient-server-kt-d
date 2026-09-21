# Ülesanne 2 - Vastutuse jaotus

## Klassifikatsioon

| # | Rakenduse osa | Klient | Server | Põhjendus |
|---|---|---|---|---|
| 1 | Mängukordade nimekirja kuvamine | Jah | Ei | Klient kuvab serverist saadud mängukordade nimekirja kasutajale. |
| 2 | Kuupäevavälja vorming | Jah | Jah | Klient aitab kuupäeva õigesti sisestada, kuid server peab saadud väärtust samuti kontrollima. |
| 3 | „Vabu kohti vähemalt” filtri rakendamine | Jah | Jah | Klient saadab valitud filtri ja server tagastab sellele vastavad mängukorrad. |
| 4 | Kontroll, kas väli on täitmata | Jah | Jah | Klient annab kohe veateate, kuid server peab tühja kohustusliku väärtuse samuti tagasi lükkama. |
| 5 | Kontroll, kas mängukord on juba täis | Jah | Jah | Klient võib näidata vabade kohtade arvu, kuid server peab enne registreerimist kohti uuesti kontrollima. |
| 6 | Kontroll, kas kasutaja on sisse logitud | Jah | Jah | Klient võib kuvada sobiva kasutajaliidese, kuid server peab kontrollima kehtivat sisselogimist. |
| 7 | Kontroll, kas kasutaja on administraator | Jah | Jah | Klient võib administraatori nupud peita, kuid server peab kontrollima kasutaja tegelikke õigusi. |
| 8 | Paarikutse saatmine | Jah | Jah | Klient saadab kutse andmed ning server kontrollib ja salvestab kutse. |
| 9 | Mängutabeli genereerimine ringmeetodiga | Ei | Jah | Server genereerib ühise mängutabeli, et tulemus oleks kõigile kasutajatele sama. |
| 10 | Edetabeli arvutamine | Ei | Jah | Server arvutab edetabeli usaldusväärsete salvestatud tulemuste põhjal. |
| 11 | Tulemuste sortimine juba laaditud tabelis | Jah | Ei | Juba brauserisse laaditud tulemusi saab klient sortida ilma uue serveripäringuta. |
| 12 | Andmebaasi parool | Ei | Jah | Andmebaasi parool peab jääma serverisse, sest kliendis oleks see kasutajale nähtav. |

## Kolm asja, mis ei tohi kunagi kliendile jõuda

1. Andmebaasi parool, sest selle lekkimisel võib ründaja saada juurdepääsu andmebaasile.
2. Salajased API-võtmed, sest nende lekkimisel võib võõras kasutada väliseid teenuseid rakenduse nimel.
3. Teiste kasutajate paroolid ja privaatsed andmed, sest nende avaldamine kahjustab kasutajate turvalisust ja privaatsust.

## Kolm rünnakut

| Rünnak | Kuidas | Miks serveripoolne kontroll aitab |
|---|---|---|
| Administraatori õiguste võltsimine | Ründaja muudab brauseris kasutajaliidest või saadab administraatori päringu käsitsi. | Server kontrollib kasutaja tegelikku rolli ja keelab loata tegevuse. |
| Täis mängukorrale registreerumine | Ründaja eemaldab brauseris piirangu ja saadab registreerimispäringu otse serverile. | Server kontrollib enne registreerimist vabade kohtade tegelikku arvu. |
| Sisendikontrollist möödumine | Ründaja saadab tühjad või vales vormingus andmed veebivormi kasutamata. | Server kontrollib kõiki saadud andmeid enne töötlemist ja salvestamist. |