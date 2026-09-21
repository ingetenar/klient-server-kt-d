# Ülesanne 3 - URL lahti võetud

## 1. `https://klubi.example.ee:8443/mangukorrad/12?sort=kuupaev&vabu=2#tulemused`

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | https | Kasutatakse turvalist HTTPS-ühendust. |
| Host | klubi.example.ee | Serveri domeeninimi. |
| Port | 8443 | Kasutatakse eraldi määratud porti 8443. |
| Tee | /mangukorrad/12 | Viitab mängukorrale numbriga 12. |
| Päringustring | sort=kuupaev&vabu=2 | Tulemused sorteeritakse kuupäeva järgi ja nõutakse vähemalt kahte vaba kohta. |
| Fragment | tulemused | Brauser liigub lehel tulemuste osani. |

Tegelikult kasutatav port: **8443**.

## 2. `http://localhost:3000/api/mangijad`

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | http | Kasutatakse krüpteerimata HTTP-ühendust. |
| Host | localhost | Server töötab samas arvutis. |
| Port | 3000 | Kohalik server kasutab porti 3000. |
| Tee | /api/mangijad | Viitab mängijate API ressursile. |
| Päringustring | Puudub | Päringuparameetrid puuduvad. |
| Fragment | Puudub | Fragment puudub. |

Tegelikult kasutatav port: **3000**.

## 3. `https://www.ut.ee/et/oppimine?utm_source=uudiskiri`

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | https | Kasutatakse turvalist HTTPS-ühendust. |
| Host | www.ut.ee | Tartu Ülikooli veebiserveri domeeninimi. |
| Port | Puudub | Porti ei ole aadressis eraldi määratud. |
| Tee | /et/oppimine | Viitab eestikeelsele õppimise lehele. |
| Päringustring | utm_source=uudiskiri | Näitab, et külastuse allikaks on märgitud uudiskiri. |
| Fragment | Puudub | Fragment puudub. |

Tegelikult kasutatav port: **443**, sest skeem on HTTPS.

## Millised osad jõuavad serverini

| Osa | Jõuab serverini | Selgitus |
|---|---|---|
| Skeem | Ei | Skeem määrab ühenduse protokolli, kuid seda ei saadeta serverile päringutee osana. |
| Host | Jah | Host näitab, millise serveriga soovitakse ühendust võtta. |
| Port | Jah | Port määrab, millise serveri teenusega ühendus luuakse. |
| Tee | Jah | Server kasutab teed õige ressursi leidmiseks. |
| Päringustring | Jah | Server saab päringuparameetrid ja võib neid vastuse koostamisel kasutada. |
| Fragment | Ei | Fragmenti kasutab ainult brauser ja seda serverile ei saadeta. |