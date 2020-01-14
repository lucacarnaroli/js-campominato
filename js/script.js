// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali da 1 a 100.
var numRandom = random(1, 100);
var arrayRandom = [];
for (var i = 0; i < 16; i++) {
  arrayRandom.push(random(1, 100));
}
console.log(arrayRandom);
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100,
var numGeneral = general(1, 100);
var arrayGeneral = [];

while () {
  var numUtente = parseInt(prompt('inserisic un numero'));
  arrayGeneral.push(numUtente);
}




function random(min, max){
  for (var i = min; i < max; i++) {
    randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  return randomNum
}
function general(numMin, numMax) {
  for (var i = numMin; i < numMax; i++) {
    generalNum = Math.floor(Math.random() * numMax) + numMin;
  }
  return generalNum
}
