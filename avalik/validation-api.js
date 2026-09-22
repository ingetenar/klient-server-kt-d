// C02 Ex2 — ETTE ANTUD liides. Seda faili sa ei kirjuta.
//
// Ta seob sündmused ja kutsub SINU funktsioone failist validation.js.
// Loe ta läbi: siin on näha, MILLAL teade tekib (blur) ja MILLAL ta kaob
// (input) — ja miks see järjekord loeb.

import { show, checkMatch } from './validation.js';

const form = document.querySelector('#ost');
const email = form.elements.email;
const email2 = form.elements.email2;
const checkPair = () => checkMatch(email, email2);

// ── kuulajad ─────────────────────────────────────────────────────────────
// input: teade KAOB kohe, kui viga on parandatud
// blur:  teade TEKIB alles siis, kui väljalt lahkutakse
//
// ★ Miks mitte teadet kohe kirjutamise ajal näidata: „Kontrolli kuju" ilmuks
//   juba esimese tähe peale, kui aadress ei ole veel valmis. Sama loogika on
//   CSS-i :user-invalid taga — tema ei värvi välja enne, kui kasutaja on
//   sellega päriselt tegelenud.
for (const field of form.elements) {
  if (!field.id || field.type === 'submit' || field.type === 'reset') continue;

  field.addEventListener('blur', () => {
    if (field === email2 || field === email) checkPair();
    show(field);
  });

  field.addEventListener('input', () => {
    if (field === email2 || field === email) checkPair();
    if (field.getAttribute('aria-invalid') === 'true') show(field); // ainult parandus
  });
}

form.addEventListener('submit', (e) => {
  checkPair();
  if (form.checkValidity()) return; // brauser saadab ise

  e.preventDefault();
  for (const field of form.elements) if (field.id) show(field);

  // ★ FOOKUS ESIMESE VEA PEALE. Ilma selleta jääb pika vormi puhul viga
  //   ekraanist välja ja kasutaja vajutab „Osta" uuesti, midagi ei juhtu.
  const first = [...form.elements].find((v) => v.id && !v.checkValidity());
  first?.focus();
});

form.addEventListener('reset', () => {
  for (const field of form.elements) {
    if (!field.id) continue;
    field.setCustomValidity('');
    field.removeAttribute('aria-invalid');
    const box = document.querySelector(`#${field.id}-error`);
    if (box) box.textContent = '';
  }
});
