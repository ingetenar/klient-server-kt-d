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

kasutaja --< sündmus >-- toimumiskoht --< saaliplaan --< koht
              |                                      |
              +--< hinnaklass                        |
              |                                      |
              +--< ost --< pilet >-------------------+
                            |
                            +--< sissepääs

hoid: koht + ostja + aegumisaeg


Peamised olemid ja seosed:

- kasutaja võib luua mitu sündmust;
- sündmus toimub ühes toimumiskohas;
- toimumiskohal võib olla saaliplaan;
- saaliplaan sisaldab kohti;
- sündmus sisaldab hinnaklasse;
- kasutaja teeb ostu;
- ost sisaldab pileteid;
- pilet on seotud koha ja sissepääsuga;
- hoid seob ajutiselt koha, ostja ja aegumisaja.

