function consultarCepAjax() {
    // Pegando o valor do campo cep
    var cep = $('#cep').val();
    // Chamando a api passando o cep
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data, status) {
        // Armazenando o resultado
        var dadosCep = data

        // Preenchendo os campos com o resultado
        $('#localidade').val(dadosCep.localidade)
        $('#bairro').val(dadosCep.bairro)
        $('#uf').val(dadosCep.uf)
        $('#logradouro').val(dadosCep.logradouro)
        $('#ddd').val(dadosCep.ddd)
    });
}