// ifelse2.js

var pessoa1 =  20
var pessoa2 =  65
var pessoa3 = 15

// Só podem ser vacinas pessoas entre 15 e 60 anos

// teste com OU || OR
if (pessoa3 >= 20 || pessoa2 <= 60) {
    console.log('sim as pessoas pode ser vacinada');
} else {
    console.log('pessoas não podem ser vacinadas');
}

// teste com E || AND
if (pessoa3 >= 20 && pessoa2 <= 60) {
    console.log('sim as pessoas pode ser vacinada');
} else {
    console.log('pessoas não podem ser vacinadas');
}