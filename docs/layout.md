# Ülesanne 4 - Paigutus, ühikud ja responsiivsus

`h1 { font-size: clamp(1.75rem, 1rem + 2.5vw, 3rem); }`

| ekraan | h1             | h2             |
|--------|----------------|----------------|
| 320 px | 28,0 px (põhi) | 21,6 px (põhi) |
| 768 px | 35,2 px        | 25,2 px        |
| 1280 px | 48,0 px (lagi) | 31,4 px       |
| 1920 px | 48,0 px (lagi) | 32,0 px (lagi) |

`h1` põhi kuni 480 px, lagi alates 1280 px.  
Ühtki `@media` rida ei olnud vaja.