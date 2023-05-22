//VERIFICA DELLA MAIL DI UN UTENTE IN UNA LISTA

//CREAZIONE ARRAY CON LISTA MAIL UTENTI CON ACCESSO
let mail = ['marco@gmail.com', 'fabrizio@gmail.com', 'simone@gmail.com', 'jacopo@gmail.com', 'enrico@gmail.com', 'boolean@gmail.com', 'utente@gmail.com', 'admin@gmail.com'];

//RICHIESTA INSERIMENTO MAIL DA PARTE DELL'UTENTE
let mail_utente= prompt('Inserisci il tuo indirizzo e-mail.');
let flag = false;

//CREAZIONE CICLO FOR PER RICERCARE LA MAIL ALL'INTERNO DELL'ARRAY

for(let i=0; i<mail.length; i++) {
    if (mail[i].toLowerCase() === mail_utente.toLowerCase()) {
        flag = true;
    }
}

//VISUALIZZO RISULTATO IN UN ALERT
if (flag === true) {
    alert('Con la tua e-mail puoi accedere.'); 

} else {
    alert('Con la tua e-mail NON puoi accedere.');
}
    