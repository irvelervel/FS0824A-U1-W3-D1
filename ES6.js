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

// SPREAD OPERATOR
// ...
// utilizzandolo su un oggetto, lo spread operator è un singolo operatore
// che richiama TUTTE LE COPPIE CHIAVE:VALORE di quell'oggetto

const objA = {
  firstName: 'Gianni',
  lastName: 'Morandi',
}

const objB = objA // NON È UNA VERA COPIA!
// stati attenti!
objB.lastName = 'Drudi'
// attenzione perchè avete anche cambiato firstName in objA!
console.log('OBJA.LASTNAME', objA.lastName)

// ma quindi come la creo una VERA copia?

const robot1 = {
  brand: 'Tesla',
  model: 'Optimus',
}

const robot2 = {
  ...robot1,
}
// ora robot2 è una VERA COPIA (un clone) di robot1, indipendente!
robot2.brand = 'Boston Dynamics'
console.log(robot1.brand)

// possiamo con lo spread operator anche fornire un "punto di partenza" da poi arricchire
const robot3 = {
  ...robot1, // ha portato dentro robot3 le coppie brand: 'Tesla' e model: 'Optimus'
  material: 'aluminum',
}

console.log('ROBOT3', robot3)

// spread operator su array
const array1 = ['stefano', 'optimus', 'andrea']
const array2 = array1 // NON È UNA VERA COPIA
// array2.pop() // toglie "andrea" da array2, ma lo ha anche tolto da array1
// console.log('ARRAY1', array1)

// creo una VERA copia di array1
const array3 = [...array1]
array3.pop() // elimina 'andrea' da array3
// ma non da array1!
console.log('ARRAY1', array1)

// possiamo anche creare una copia come punto di partenza, e poi sovrascrivere
// una proprietà esistente: non avremo due volte la stessa proprietà, perchè
// negli oggetti JS una proprietà può esserci una volta sola (in questo caso
// vado a sovrascrivere brand: 'Tesla' con brand: 'Rivian')
const robot4 = {
  ...robot3, // quindi c'ha brand, model e material
  brand: 'Rivian',
}

delete robot4.material
console.log('ROBOT4', robot4)

// REST PARAMETERS (...)
// es. volete creare una funzione che trasforma tutte le stringhe ricevute in maiuscolo

const allToUppercase = (...words) => {
  console.log('WORDS', words) // words è un ARRAY con tutti i parametri (in questo
  // caso, stringhe!)
  let str = ''
  for (let i = 0; i < words.length; i++) {
    // questo è un ciclo for che ciclerà TUTTI I PARAMETRI RICEVUTI, che sono
    // stati "riassunti" nell'array words

    // aggiungo a str, che parte come stringa vuota, una parola dell'array words alla volta
    // messa in maiuscolo e seguita da uno spazio
    str = str + words[i].toUpperCase() + ' '
    // str += words[i].toUpperCase() + ' ' // <-- PRO VERSION
  }
  return str // str ora non è più la stringa vuota iniziale, le sono state "aggiunte"
  // tutte le parole ricevute come parametri messe in maiuscolo
}

console.log('RISULTATO', allToUppercase('ciao', 'epicode')) // 'CIAO EPICODE'
console.log('RISULTATO', allToUppercase('io', 'mi', 'chiamo', 'gigi')) // 'IO MI CHIAMO GIGI'
console.log(
  'RISULTATO',
  allToUppercase('oggi', 'piove', 'di', 'brutto', 'brutto', 'brutto')
) // 'OGGI PIOVE DI BRUTTO BRUTTO BRUTTO'

// umberto chiede se funziona anche con parametri che sono array... :')
const umberto = (...u) => {
  console.log(u)
}

umberto([1], [1, 2], [1, 2, 3])

// DESTRUCTURING DI PROPRIETÀ

const robot5 = {
  brand: 'Empire Manufacturing',
  model: 'R2-D2',
  iq: 200,
}

console.log(robot5.brand, robot5.model, robot5.iq)

const { brand, model, iq } = robot5 // ho creato 3 nuove variabili!

// brand è una nuova variabile che ho appena creato. L'ho già assegnata a robot5.brand
console.log('BRAND', brand) // 'Empire Manufacturing'
// model è una nuova variabile che ho appena creato. L'ho già assegnata a robot5.model
console.log('MODEL', model) // 'Empire Manufacturing'
// iq è una nuova variabile che ho appena creato. L'ho già assegnata a robot5.iq
console.log('IQ', iq) // 'Empire Manufacturing'

robot5.brand = 'Tesla'

// versione migliorata
console.log(brand, model, iq)

// NUOVI METODI PER GLI ARRAY
// tutti i metodi che andremo ad esplorare adesso sono dei metodi che CICLANO gli array

const singers = ['Adriano Celentano', 'Gianni Morandi', 'Claudio Baglioni']
for (let i = 0; i < singers.length; i++) {
  console.log(singers[i].slice(0, 1))
}

// .forEach()
singers.forEach((singer) => {
  // qui dentro ci andrà il codice che verrà eseguito per OGNI elemento dell'array
  // singer è la stessa cosa di singers[i] nel ciclo for
  console.log(singer.slice(0, 1))
})
// una funzione passata come parametro di un'altra funzione si chiama "callback"

const above100 = [] // deve diventare [280, 300]
const numbers = [32, 280, 56, 0, 300]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 100) {
//     above100.push(numbers[i])
//   }
// }

numbers.forEach((singleNumber) => {
  if (singleNumber > 100) {
    above100.push(singleNumber)
  }
  // PRO VERSION con ternario (ringraziamo Lorenzo!)
  //   singleNumber > 100 ? above100.push(singleNumber) : {}
})

console.log(above100)

numbers.forEach((singleNumber, i) => {
  console.log('SONO AL CICLO n.' + i)
  // il secondo parametro del forEach è la i del corrispondente for (se vi serve)
})

// .map()
// map TRASFORMA un array in UN ALTRO ARRAY (con la stessa lunghezza)

// dato un array di stringhe, crea un nuovo array numerico dove ogni elemento
// è pari alla lunghezza di ogni stringa

const strArray = ['epicode', 'school', 'robot'] // -> [7, 6, 5]

const lengthArray = []

// for (let i = 0; i < strArray.length; i++) {
//   lengthArray.push(strArray[i].length)
// }

strArray.forEach((word) => {
  lengthArray.push(word.length)
})

// .map() trasforma, elemento per elemento, un array in uno nuovo e lo ritorna
const newArray = strArray.map((word) => {
  return word.length
  // il return identifica come volete trasformare l'elemento corrente
  // una volta trasformato, verrà inserito come elemento in un nuovo array
  // il valore di ritorno del map
})

// convertiamo un array di parole minuscole in un array di parole maiuscole
const lowercase = ['patricia', 'stefano', 'giulia', 'emanuele']

const uppercase = lowercase.map((firstName) => {
  return firstName.toUpperCase()
  // al primo ciclo, ho ritornato 'PATRICIA'
  // al secondo ciclo, ho ritornato 'STEFANO'
  // al terzo ciclo, ho ritornato 'GIULIA'
  // al quarto ciclo, ho ritornato 'EMANUELE'
  // tutti questi valori ritornati sono stati già automaticamente inseriti in uppercase
  // che è diventato un NUOVO array (lowercase non è stato danneggiato!) di lunghezza
  // è pari a lowercase
})

// dato un array di numeri, convertilo in un nuovo array dove ogni numero viene
// addizionato di 17

const num1 = [43, 67, 83, 0]
const plusSeventeen = num1.map((n) => {
  return n + 17
}) // [60, 84, 100, 17]

const stringArray = num1.map((num) => {
  return num.toString()
})

console.log('stringArray', stringArray)

// .filter()
