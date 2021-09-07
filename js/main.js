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

var nuovoNome = prompt("Inserisci il tuo nome");

while (!isNaN(nuovoNome)) {
    alert("Errore!");
    nuovoNome = prompt("Inserisci il tuo nome");
}

var nuovoCognome = prompt("Inserisci il tuo cognome");

while (!isNaN(nuovoCognome)) {
    alert("Errore!");
    nuovoCognome = prompt("Inserisci il tuo cognome");
}

var nuovaEta = parseInt(prompt("Inserisci la tua età"));

while (isNaN(nuovaEta) || nuovaEta < 18 || nuovaEta > 60) {
    alert("Errore! Devi inserire il numero dei tuoi anni. Ricorda che puoi iscriverti solo se hai un'età compresa tra 18 e 60.");
    nuovaEta = parseInt(prompt("Inserisci la tua età"));
}

var nuovoStudente = {
    "nome" : nuovoNome,
    "cognome" : nuovoCognome,
    "eta" : nuovaEta
}

studenti.push(nuovoStudente);

// PARTE EXTRA 
// mostro nella pagina html l'elenco di tutti gli studenti (nome e cognome) compreso quello inserito dall'utente 

for (var i = 0; i < studenti.length; i++) {
    document.getElementById("iscritti").innerHTML += `<br> ${studenti[i]["nome"]} ${studenti[i]["cognome"]} <br>`;
}



