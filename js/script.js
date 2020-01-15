// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali da 1 a 100. OK
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayBomb = [];
var random = getRandomNum(1,100);
// for (var i = 0; i < 16; i++) {
//   arrayRandom.push(getRandomNum(1,100));
// }
// console.log(arrayRandom);

while (arrayBomb.length < 16) {
  var random = getRandomNum(1,100);
  var find = isInArrey(arrayBomb,random);
  if (find == false) {
    arrayBomb.push(random);
  }
}
console.log(arrayBomb.sort());

var points = 0;
var message = 'hai vinto';

var findBomb = false;

arrayGeneral = [];
var numPrompt = 4;
while (arrayGeneral.length < numPrompt && findBomb == false) {
  while (rangeNumber(1, 100, numUtente)== false) {
    var numUtente = parseInt(prompt('inserisci un numero da 1 a 100'));

  }

  if (isInArrey(arrayGeneral,numUtente)== false) {
     arrayGeneral.push(numUtente);
     if (isInArrey(arrayBomb,numUtente)== true) {
       message = 'hai perso';
       findBomb == true;
     } else {
       points++;
     }
  }
}
console.log(numUtente);
console.log(message + ' ' + points);

// -------------------------------------------------
// FUNZIONI
function getRandomNum(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1) ) + min;
}

function isInArrey(array,value) {
  // FOR
 //  for (var i = 0; i < array.length; i++) {
 //    console.log(array[i]);
 //    if (array[i] == value) {
 //    return true;
 //   }
 //  }
 //   return false
 // }
// WHILE
var i = 0;
var k = false;
while (i < array.length && k == false) {
   if (array[i] == value) {
     k = true;
   }
  i++;
}
return k;
}

function rangeNumber(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result
}
