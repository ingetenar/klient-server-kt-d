# Ülesanne 6 - Latents ja renderdustee

| samm             | ut.ee    | neti.ee  | localhost |
|------------------|----------|----------|-----------|
| DNS              | 26.60 ms | 21.21 ms | 0.03 ms   |
| TCP käepigistus  | 30.75 ms | 7.18 ms  | 0.44 ms   |
| TLS käepigistus  | 55.51 ms | 88.58 ms | 0 ms      |
| server + 1. bait | 36.06 ms | 7.97 ms  | 1.03 ms   |

| kolm päringut | aeg       |
|---------------|-----------|
| järjest       | 292.62 ms |
| paralleelselt | 455.02 ms |

| blokeerib RENDERDUST | iga `<link rel="stylesheet">` |
|----------------------|--------------------------------|
| blokeerib PARSIMIST  | sünkroonne `<script>`          |