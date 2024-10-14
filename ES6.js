console.log('Novità di ES6')

// ES6 è stata una major revision di JS (nel 2016) che ha portato diverse novità nel piatto:

// LET & CONST
// let e const sono due nuove keyword per creare variabili in JS
// oggi sono LO STANDARD
// let & const creano delle variabili con VISIBILITÀ DI BLOCCO (block-scoped variables)

if (10 > 5) {
  // entreremo SEMPRE dentro questo if!
  let x = 10
}

// console.log(x) // undefined, x non esiste!

// let crea una variabile RI-ASSEGNABILE, const crea una CONSTANT-VARIABLE (una variabile
// NON ri-assegnabile)
// const è l'inizializzatore standard per variabili non primitive, oggetti, array, funzioni etc.
const arr1 = [3, 56]
arr1.pop() // eliminare il numero 56, permesso anche se ho utilizzato const
// arr1 = 'ciao' // <-- non è permesso

const obj1 = { name: 'Stefano' }
obj1.surname = 'Casasola' // aggiungere una proprietà è concesso
delete obj1.name // rimuovere una proprietà è concesso
// obj1 = 'ciao' // <-- non è permesso

// FUNZIONI
// una funzione è un blocco di codice riutilizzabile.
// una funzione va DICHIARATA e poi può venire INVOCATA (utilizzarla)
// una funzione può venire resa più "dinamica" grazie all'introduzione di PARAMETRI

const fixedSum = function () {
  return 5 + 8
}

fixedSum() // 13

const genericSum = function (n1, n2) {
  return n1 + n2
}
genericSum(9, 1) // 10
genericSum(45, 55) // 100

const total = genericSum(genericSum(2, 4), genericSum(9, 2)) // sto sommando 6 e 11
console.log('TOTAL VALE', total)

// NON create le funzioni tramite questo utilizzo della keyword "function"
// creare delle funzioni senza assegnarle ad una variabile(costante) attiva un meccanismo
// insito in JS che si chiama "hoisting automatico" che vi permetterà di invocare una
// funzione PRIMA di averla definita, e questa è una PESSIMA prassi.
console.log(greet().toLowerCase()) // 'ciao epicoders'

function greet() {
  return 'Ciao EPICODERS'
}
// NON UTILIZZIAMO FUNCTION COSÌ, ma assegniamo sempre il risultato della creazione
// di una funzione ad una costante, in modo da fargli seguire le regole delle costanti

const right = function () {
  return 'Il modo corretto di creare una funzione'
}
console.log(right().toUpperCase())

// LE ARROW FUNCTIONS
const test = (/* qui i parametri */) => {
  // qui ci va il codice
}

const write = (name) => {
  return 'Ciao, ' + name
}

write('Stefano') // 'Ciao, Stefano'

// DIFFERENZE TRA FUNZIONE NORMALE E ARROW:
// - sintassi più abbreviata per la arrow
// - se il corpo della funzione è monoriga, è possibile RITORNARLO senza la keyword "return"
// - (tranello) le funzioni freccia NON possiedono un proprio "this" (ma al momento
// non ci interessa)

const arrowSum = (n1, n2) => {
  return n1 + n2
}

arrowSum(5, 6) // torna 11

// la possiamo abbreviare ulteriormente così:
const shortSum = (n1, n2) => n1 + n2 // STO RITORNANDO n1+n2 IMPLICITAMENTE

// nel caso la funzione freccia sia monoriga e torni il valore,
// potete togliere le graffe e omettere il return
console.log('torna 11?', shortSum(5, 6))
