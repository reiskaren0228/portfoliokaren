const turma = "Senac Web"; // CONST - Não altera o valor ao longo do código GLOBAL
var aluno = "Karen Menezes"; // VAR - Valor pode ser alterado ao longo do código GLOBAL

if(aluno != "Reis"){
    // LET - O valor só existe no escopo que foi criado LOCAL
    let primeiroNome = aluno.split(" ")[0];
    let segundoNome = aluno.split(" ")[1];

    var nome = `O nome é: ${primeiroNome} e o sobrenome é ${segundoNome} e a turma é ${turma}` // Valor pode ser alterado ao longo é GLOBAL
}

var turmaAluno = "Outro valor"
console.log('turma aluno: ', turmaAluno);
console.log('nome: ', nome);
