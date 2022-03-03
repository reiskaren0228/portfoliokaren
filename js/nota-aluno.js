function calcularNota() {
        let nota = $('input');
        let media = (+nota[0].value) + 
                    (+nota[1].value) +
                    (+nota[2].value) +
                    (+nota[3].value);
        $('#resultado').html(verAprovação(media/4));
}

function verAprovação(media/4){
    if (media >= 7){
        return="Aprovado";}
    else if (media >=3 && media <7){
        return="Recuperação";}
    else {
        return="Reprovado";}
    
}