export function message(field) {
    const validity = field.validity;

    if (validity.valueMissing) {
        return 'See väli on kohustuslik.';
    }

    if (validity.typeMismatch) {
        return 'Kontrolli välja kuju.';
    }

    if (validity.tooShort) {
        return `Vähemalt ${field.minLength} tähemärki.`;
    }

    if (validity.patternMismatch) {
        return 'Kontrolli välja kuju.';
    }

    if (validity.rangeUnderflow) {
        return `Vähim väärtus on ${field.min}.`;
    }

    if (validity.rangeOverflow) {
        return `Suurim väärtus on ${field.max}.`;
    }

    if (validity.stepMismatch) {
        return `Kasuta sammu ${field.step}.`;
    }

    if (validity.customError) {
        return field.validationMessage;
    }

    return field.validationMessage;
}

export function show(field) {
    const errorBox = document.querySelector(`#${field.id}-error`);

    if (field.checkValidity()) {
        field.removeAttribute('aria-invalid');

        if (errorBox) {
            errorBox.textContent = '';
        }

        return;
    }

    field.setAttribute('aria-invalid', 'true');

    if (errorBox) {
        errorBox.textContent = message(field);
    }
}

export function checkMatch(email, email2) {
    if (email2.value && email.value !== email2.value) {
        email2.setCustomValidity('E-posti aadressid ei kattu.');
    } else {
        email2.setCustomValidity('');
    }
}