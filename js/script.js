// Il computer deve generare 16 numeri casuali da 1 a 100.
for (var i = 0; i < 16; i++) {
  var numRandom = Math.floor(Math.random()*(100 + 1 - 1))+1;
  console.log(numRandom[i]);
}
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100,
for (var i = 0; i <10; i++) {
  var numUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
  if (numUtente > 100) {
    alert('inserisci un numero da 1 a 100!!!');
  } else if (numUtente < 1) {
    alert('inserisci un numero da 1 a 100!!!');
  } else {
    console.log(numUtente);
  }
  if (numUtente % numRandom == 1) {
    console.log('fine');
  } else {
    console.log();
  }
}
// se il numero è presente nella lista dei numeri generati, la partita termina,
