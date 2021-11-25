// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creo un oggetto di nome studente attribuiendoli 3 proprietà
// nome ---> Nome studente
// cognome ---> Cognome studente
// eta ---> Età studente
const studente = {
    nome: 'Marco',
    cognome: 'Francati',
    eta: 20
}

// Ciclo l'oggetto studente andando a stapare la key e il contenuto della key tot volte.
for( let key in studente ){
    console.log(key + ': ' + [key]);
}

// Array studenti 
let arrayStudenti = [
    {
        nome: 'Giulia',
        cognome: 'Stardani',
        eta: 20
    },
    {
        nome: 'Elisa',
        cognome: 'Scardini',
        eta: 20
    },
    {
        nome: 'Federico',
        cognome: 'Sardella',
        eta: 20
    }
];

// Chiedo all'utente quanti studenti vuole inserire
let quantitaStudentiDaInserire = parseInt(prompt('Quanti studenti vuoi inserire? '));

// Tramite un ciclo for vado a chiedere all'utente quanti studenti vuole inserire nell' array array studenti
for( let i = 0; i < quantitaStudentiDaInserire; i++ ){
    let thisStudente = '';

    newStudente = {
        nome: prompt('Inserisci il nome dello studente: '),
        cognome: prompt('Inserisci il cognome dello studente: '),
        eta: parseInt(prompt('Inserisci l\'età dello studente: '))
    }
    thisStudente = newStudente;
    arrayStudenti.push(thisStudente);
}

console.log(arrayStudenti);

// tramite un ciclo for vado a stampare solo il nome e cognome dell'array
for( i = 0; i < arrayStudenti.length; i++ ){
    let thisStudente = 0; 
    thisStudente = arrayStudenti[i];
    console.log(thisStudente.nome);
    console.log(thisStudente.cognome);
}