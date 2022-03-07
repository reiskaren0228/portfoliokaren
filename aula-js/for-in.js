let pessoa = {
    nome: "Karen",
    idade: "34",
    sexo: "feminino",
    peso: "82"
}

console.log(pessoa["sexo"]) // acessa objeto pelo nome da chave
console.log(pessoa.sexo) // acessa objeto pela propriedade

for (let p in pessoa) {
    console.log('dados da pessoa', p) // chave ex: nome
    console.log('dados da pessoa', pessoa[p]) // valor ex: karen
}
