# Ülesanne 4 - Päringu jälgimine DevToolsiga

Uuritud leht: <https://www.ut.ee/et>  
Kuupäev: 08.09.2026

| Näitaja | Väärtus |
|---|---:|
| Päringuid kokku | 59 |
| Ülekantud maht | 2.9 MB |
| Ressursside maht | 4.7 MB |

| Kood | Arv | Mida tähendab |
|---|---:|---|
| 200 | 57 | Päring õnnestus ja server tagastas soovitud ressursi. |
| 302 | 1 | Server suunas päringu ajutiselt teisele aadressile. |
| 304 | 0 | Ressurss ei ole muutunud ning brauser võib kasutada vahemällu salvestatud koopiat. Minu katses 304 vastuseid ei olnud, sest Disable cache oli sisse lülitatud. |
| Muu | 1 | Üks päring oli brauseris blokeeritud ja sellel ei olnud tavalist HTTP-staatusekoodi. |

## Suurima mahuga sisutüüp

Suurima mahu andsid pildid ehk Img-tüüpi ressursid. Kokku oli 23 pildipäringut ja nende ülekantud maht oli 1723 kB.

## Suurim üksikpäring

- **Aadress:** <https://ut.ee/sites/default/files/styles/ut_content_teaser/public/2026-09/Untitled%20design.png?h=c9e647bb&itok=DdulDkwL>
- **Tüüp:** webp
- **Maht:** 258 kB
- **Aeg:** 296 ms
- **Staatus:** 200 OK

## cURL-päringu tulemus

Kopeerisin pildipäringu DevToolsi Network-paneelist cURL-käsuna ja käivitasin selle terminalis. cURL sai serverilt sama binaarse pildifaili nagu brauser. Terminalis kuvati pildi asemel hoiatus, sest binaarset faili ei ole soovitatav terminalis tekstina kuvada. Brauseri ja terminali tulemused kattusid.

## Kolm järeldust

1. Ühe veebilehe avamisel saadab brauser palju eraldi päringuid, sest HTML, pildid, stiilid ja skriptid laaditakse eraldi ressurssidena.
2. Kõige suurema osa ülekantud andmetest moodustasid pildid, seega mõjutab piltide suurus oluliselt lehe laadimiskiirust.
3. Brauser ei ole ainus võimalik klient, sest sama päringu saab serverile saata ka terminalist cURL-käsuga.