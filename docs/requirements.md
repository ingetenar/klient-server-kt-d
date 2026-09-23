# Ülesanne 6 - Nõuded ja arhitektuuri valik

## Rakenduse eesmärk

Piletikassa võimaldab kasutajal leida sündmuse, valida sobiva pileti, maksta ostu eest ja saada sissepääsuks digitaalse pileti.

Eduka kasutusloo jaoks peab kasutaja saama:

1. leida sobiva sündmuse;
2. valida pileti või istekoha;
3. tasuda ostu eest;
4. saada pileti, millega saab sündmusele siseneda.

## Rollid

### Kasutaja

Kasutaja on globaalne roll. Kasutaja saab sirvida sündmusi, osta pileteid ja vaadata enda tellimusi.

### Korraldaja

Korraldaja ei ole eraldi konto liik, vaid seos kasutaja ja sündmuse vahel. Sama inimene võib ühe sündmuse puhul olla korraldaja ja teise sündmuse puhul tavaline ostja.

Korraldaja saab hallata enda loodud sündmusi, pileteid ja müügiandmeid.

### Süsteemihaldur

Süsteemihaldur on globaalne roll. Süsteemihaldur saab hallata kasutajaid ja toimumiskohti ning jälgida süsteemi tööd.

## Funktsioonid tähtsuse järjekorras

1. Sündmuste otsimine ja vaatamine
2. Pileti või istekoha valimine
3. Tellimuse loomine
4. Makse sooritamine
5. Digitaalse pileti väljastamine
6. Kasutajakonto ja tellimuste vaatamine
7. Sündmuse loomine ja muutmine
8. Piletite ning hindade haldamine
9. Pileti kontrollimine sündmusele sisenemisel
10. Müügiaruannete vaatamine

Esimesed neli funktsiooni moodustavad ühe põhilise kasutusloo: kasutaja tuleb lehele, leiab sündmuse, valib pileti, loob tellimuse ja maksab selle eest.

## Andmete üldpilt

- Kasutaja loob tellimusi.
- Kasutaja võib olla sündmuse korraldaja.
- Sündmus toimub ühes toimumiskohas.
- Sündmusel on üks või mitu piletitüüpi.
- Tellimus sisaldab ühte või mitut tellimusrida.
- Tellimusrida viitab piletitüübile.
- Tellimusega on seotud makse.
- Eduka makse järel luuakse pilet.
- Pilet kuulub kasutajale ja on seotud sündmusega.
- Piletit kontrollitakse sündmusele sisenemisel.

Peamised olemid:

- Kasutaja
- Sündmus
- Korraldaja seos
- Toimumiskoht
- Piletitüüp
- Tellimus
- Tellimusrida
- Makse
- Pilet
- Piletikontroll

## Arhitektuurimudelite võrdlus

### Monoliit

Monoliitses rakenduses asuvad kasutajaliides, äriloogika ja andmete töötlemine ühes rakenduses. Seda on alguses lihtne arendada, kuid kasvava süsteemi hooldamine ja muutmine võib muutuda keeruliseks.

### Partnerivõrk ehk P2P

P2P-mudelis suhtlevad kasutajate seadmed omavahel ja võivad ise andmeid hoida. See sobib süsteemidele, kus puudub keskne haldaja ja osalejad on võrdsed.

Piletikassa jaoks ei ole P2P sobiv, sest tellimuste, maksete, piletite ja vabade kohtade kohta peab olema üks usaldusväärne andmeallikas. Kasutajate seadmed ei tohi ise otsustada, kas makse õnnestus või kas pilet kehtib.

### Klient-server

Klient-server-arhitektuuris kuvab klient kasutajaliidest ja saadab päringuid serverile. Server kontrollib õigusi ja ärireegleid, töötleb tellimusi ning suhtleb andmebaasiga.

## Valitud arhitektuur

Piletikassa kasutab klient-server-arhitektuuri.

Klient-server on vajalik, sest süsteem peab tsentraalselt kontrollima:

- kasutajate autentimist ja õigusi;
- vabade piletite ning istekohtade arvu;
- tellimuste loomist;
- maksete tulemusi;
- piletite väljastamist;
- piletite kehtivust;
- korraldajate õigusi;
- andmete terviklikkust.

Klient ei saa olla nende otsuste puhul usaldusväärne, sest kasutaja saab brauseris olevat HTML-i, CSS-i ja JavaScripti muuta. Server peab kõik olulised andmed ja tegevused uuesti kontrollima.

## Mida kaasaegne CSS selles kontrolltöös JavaScripti asemel tegi

- `:user-invalid` näitab välja vigast olekut pärast seda, kui kasutaja on väljaga tegelenud.
- `@layer` määrab stiilikihtide prioriteedi ilma keerukate selektorite või `!important` kasutamiseta.
- CSS-i muutujad võimaldavad hallata värve, vahemikke ja teemasid ühest kohast.
- `prefers-color-scheme` valib automaatselt kasutaja süsteemile vastava heleda või tumeda teema.
- `clamp()` muudab kirjasuurust sujuvalt vastavalt ekraani laiusele.
- CSS Grid koos `auto-fit` ja `minmax()` funktsioonidega muudab kaartide paigutust ilma JavaScriptita.
- Konteinerpäring muudab komponendi kujundust selle enda laiuse järgi.
- `content-visibility: auto` võimaldab brauseril ekraanist väljas olevate elementide renderdamist edasi lükata.