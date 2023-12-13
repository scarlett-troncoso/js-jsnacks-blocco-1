/*Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

//Chiedi un numero di 4 cifre all’utente
const numInsert = Number(prompt('inserisci un numero di 4 cifre'))
console.log(numInsert);

//calcola la somma di tutte le cifre che compongono il numero

const number = numInsert
console.log(number);

for (let i = 0; i < number.length; i++) {
    const ogniNumero = number[i];
    console.log(ogniNumero);
    
}