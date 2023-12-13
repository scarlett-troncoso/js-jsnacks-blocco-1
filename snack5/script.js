/*Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//Crea un array vuoto.
const vuoto = [];
console.log(vuoto);

//Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    const numeriUt = Number(prompt('Inserisce un numero'));

    if ((numeriUt % 2) != 0) {
        vuoto.push(numeriUt); ////se è dispari inseriscilo nell’array
        console.log(numeriUt, ' DISPARI');
        //Come faccio se voglio stampare in pagina tutti i numeri dispari?
        //document.querySelector('.num').innerHTML = 'DISPARI: ' + dispari;
        
    } else {
        console.log(numeriUt, ' pari');
    }
}