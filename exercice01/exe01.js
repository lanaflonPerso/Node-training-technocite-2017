function num2Letters(number) {
    if (isNaN(number) || number < 0 || number > 999) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }
    var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
        tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'septante', 'quatre-vingt','nonante'];
    var units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;
    var unitsOut, tensOut, hundredsOut;
    if (number === 0) {
        return 'zéro';
    } else {
        // Traitement des unités
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];
        // Traitement des dizaines
        if (tens === 1 && units > 0) {
            tensOut = units2Letters[10 + units];
            unitsOut = '';
        } else {
            tensOut = tens2Letters[tens];
        }
        tensOut += (units === 0 && tens === 8 ? 's' : '');
        // Traitement des centaines
        hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');
        // Retour du total

        return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
    }
}
var number = process.argv[2];
console.log(num2Letters(number));