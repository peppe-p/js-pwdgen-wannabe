//RECUPERO INFORMAZIONI DALL'UTENTE
var username = prompt("Ciao, qual'è il tuo nome?");
var surname = prompt("E il tuo cognome?");
var favcolour = prompt("Posso sapere il tuo colore preferito?");
alert("Sto calcolando il risultato! Apparirà nella pagina!");

//STAMPO I RISULTATI NELLA PAGINA
document.getElementById("nome").innerHTML = username;
document.getElementById("cognome").innerHTML = surname;
document.getElementById("colore").innerHTML = favcolour;
document.getElementById("password").innerHTML = username + surname + favcolour + "21"