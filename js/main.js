// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1.a Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    "nome" : "Andrea",
    "cognome" : "Geraci",
    "eta" : 30
}

console.log(studente);

// 1.b. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente) {
    console.log(studente[key]);
}

// 2. Creare un array di oggetti di studenti.

var studenti = [

    {
        "nome" : "Marco",
        "cognome" : "Pozzo",
        "eta" : 27
    },

    {
        "nome" : "Chiara",
        "cognome" : "Rossi",
        "eta" : 31
    },

    {
        "nome" : "Luca",
        "cognome" : "Amodeo",
        "eta" : 32
    },

    {
        "nome" : "Francesca",
        "cognome" : "Riso",
        "eta" : 26
    },

    {
        "nome" : "Giancarlo",
        "cognome" : "Verdi",
        "eta" : 24
    }
];

// 3. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i]["nome"]);
    console.log(studenti[i]["cognome"]);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    "nome" : prompt("Inserisci il nome del nuovo studente"),
    "cognome" : prompt("Inserisci il cognome del nuovo studente"),
    "eta" : parseInt(prompt("Inserisci l'età del nuovo studente"))
}

studenti.push(nuovoStudente);

console.log(studenti);




