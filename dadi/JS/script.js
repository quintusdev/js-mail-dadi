//TIRARE I DADI E SCEGLIERE IL VINCITORE

let num_utente = '';
let num_pc = '';

alert('Clicca il pulsante ok per tirare i dadi e tentare la fortuna.');

//GENERO UN NUMERO CASUALE PER L'UTENTE
num_utente = Math.floor(Math.random() * 6 + 1);

//GENERO UN NUMERO CASUALE PER IL COMPUTER
num_pc = Math.floor(Math.random() * 6 + 1);

// CONTROLLO QUAL'E' IL NUMERO MAGGIORE

if (num_utente > num_pc) {

    alert("Il tuo numero è: " + ` ${num_utente} `+ " che è maggiore di:  " + ` ${num_pc} ` + ' Hai Vinto!!!. Grazie per aver giocato!');

} else if (num_utente === num_pc) {

    alert("Il tuo numero è: " + ` ${num_utente} `+ " che è uguale a :  " + ` ${num_pc} ` +  ' Hai Perso!!! Pareggio!');

} else {
    
    alert("Il tuo numero è: " + ` ${num_utente} `+ " che è minore di:  " + ` ${num_pc} ` +  ' Hai Perso!!! Ritenta sarai più fortunato!');
}

