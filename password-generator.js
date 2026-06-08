#!/usr/bin/env node

function generatePassword(length = 12, useDigits = true, useSpecial = true) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (useDigits) chars += '0123456789';
    if (useSpecial) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Разбор аргументов командной строки
const args = process.argv.slice(2);
let length = 12;
let noDigits = false;
let noSpecial = false;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-l' && args[i+1]) {
        length = parseInt(args[i+1]);
        i++;
    } else if (args[i] === '--no-digits') {
        noDigits = true;
    } else if (args[i] === '--no-special') {
        noSpecial = true;
    }
}

const password = generatePassword(length, !noDigits, !noSpecial);
console.log(password);
