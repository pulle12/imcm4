function login() {
    let usernameInput = document.getElementById('usernameInput').value;
    let passwordInput = document.getElementById('passwordInput').value;
    const usernameResult = validateUsername(usernameInput);
    const passwordResult = validatePassword(passwordInput);

    if (usernameResult.valid && passwordResult.valid) {
        document.getElementById('loginMessage').innerText = "Erfolgreich angemeldet du!";
        document.getElementById('loginMessage').hidden = false;
    } else {
        const parts = [];
        if (!usernameResult.valid) parts.push("Benutzername: " + (usernameResult.message || "Ungültiger Benutzername.") + "<br/>");
        if (!passwordResult.valid) parts.push("Passwort: " + (passwordResult.message || "Ungültiges Passwort."));
        document.getElementById('loginMessage').innerHTML = parts.join(' ');
        document.getElementById('loginMessage').hidden = false;
    }
}

function validateUsername(username) {
    // Prüfe Länge
    if (username.length < 5 || username.length > 20) {
        return { valid: false, reason: 'length', message: 'Benutzername muss 5–20 Zeichen lang sein.' };
    }
    // Erlaubte Zeichen: Buchstaben, Zahlen, Unterstrich
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (!usernamePattern.test(username)) {
        return { valid: false, reason: 'chars', message: 'Nur Buchstaben, Zahlen und Unterstriche erlaubt.' };
    }
    return { valid: true };
}

function validatePassword(password) {
    if (password.length < 8) { // Test für Länge
        return { valid: false, reason: 'length', message: 'Passwort muss mindestens 8 Zeichen lang sein.' };
    }
    if (!/[a-z]/.test(password)) { // Test für kleinbuchstaben
        return { valid: false, reason: 'lower', message: 'Mindestens ein Kleinbuchstabe erforderlich.' };
    }
    if (!/[A-Z]/.test(password)) { // Test für großbuchstaben
        return { valid: false, reason: 'upper', message: 'Mindestens ein Großbuchstabe erforderlich.' };
    }
    if (!/\d/.test(password)) { // test für zahlen
        return { valid: false, reason: 'digit', message: 'Mindestens eine Zahl erforderlich.' };
    }
    if (!/[^A-Za-z0-9]/.test(password)) { //test für sonderzeichen
        return { valid: false, reason: 'special', message: 'Mindestens ein Sonderzeichen erforderlich.' };
    }
    return { valid: true };
}