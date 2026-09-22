# Ülesanne 3 - Kaskaad ja spetsiifilisus

| spetsiifilisus | selektor                 | selgitus                         |
|----------------|--------------------------|----------------------------------|
| 0-1-0          | `.field`                 | raamistiku vormiväli             |
| 0-1-0          | `.field`                 | meie vormiväli - SAMA            |
| 0-2-0          | `.leht .field`           | vana võte: lisa esivanem         |
| 0-0-0          | `:where(h1, h2, h3)`     | lähtestus                        |
| 0-0-1          | `:is(h2, h3)`            | rühm                             |
| 0-2-1          | `.kaardid > li:not(...)` | `:not()` argument loeb           |
| 1-1-0          | `#purchase .field`       | id võidab kõik klassid           |

Kiht `ours` võidab kihti `framework` 0-1-0 vastu 0-1-0 - STRUKTUURSELT, mitte spetsiifilisusega.