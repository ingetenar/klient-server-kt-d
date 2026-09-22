# `message()` kontrollitud juhtumid

- tühi kohustuslik väli → „See väli on kohustuslik.”
- vale e-posti kuju → „Kontrolli välja kuju.”
- `minlength="2"` → „Vähemalt 2 tähemärki.”
- `max="6"` → „Suurim väärtus on 6.”
- tundmatu põhjus → brauseri enda teade
- `valueMissing` + `typeMismatch` → kohustuslikkus võidab

| valija | millal kehtib |
|---|---|
| `:invalid` | kohe lehe avamisel |
| `:user-invalid` | alles pärast väljaga tegelemist |