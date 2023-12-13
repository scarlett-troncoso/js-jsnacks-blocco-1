/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const invitatiLista = ['SOL', 'CLARA', 'STEFANIA', 'FABIANA', 'SCARLETT', 'FLAVIA', 'GIADA']
console.log(invitatiLista);

//chiedi all’utente il suo nome
const nomeUtente = prompt('Inserisci il tuo nome in LLETTERE MAIUSCOLE')
console.log(nomeUtente, 'INSERITO DALL UTENTE');

const verifica = document.querySelector('.conferma')

//comunicagli se può partecipare o no alla festa
for (let i = 0; i < invitatiLista.length; i++) {
    const list = invitatiLista [i];

    if (nomeUtente === list) { // puó partecipare

        verifica.innerHTML = nomeUtente + ' Sei invitata alla festa del grande Gatsby!!!!'
        console.log(nomeUtente, 'Sí é invitato');

        } /*else { // Non puó partecipare

            verifica.innerHTML = nomeUtente + ' Mi dispiace non sei invitata alla festa del grande Gatsby'
            console.log(nomeUtente, 'No é invitato');
        }*/

        //DOMANDA:: NON RIESCO A METTERE ELSE, SE LO METTO, TUTTI I RISULTATI ESCONO INCORRETI PURE SE DOVREBBERO ESSERE CORRETTI

}
