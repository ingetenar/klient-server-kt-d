# Ülesanne 5 - Bootstrap ja CSS-i jõudlus

| paigutus                  | aeg       |
|---------------------------|-----------|
| ilma                      | 108,87 ms |
| `content-visibility: auto` | 43,63 ms  |

| valija                         | aeg     |
|--------------------------------|---------|
| `.card`                        | 0,15 ms |
| `article`                      | 0,14 ms |
| `*`                            | 0,15 ms |
| `main .events > article.card`  | 0,38 ms |

Kõik neli valijat on alla millisekundi. Sügav valija oli mõõdetud valijatest kõige kallim.

Paigutuse aeg on valijate ajast üle kahe suurusjärgu kallim. Seetõttu tasub jõudluse parandamisel vaadata eelkõige paigutust ja `content-visibility` kasutamist.