function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } 
    else {
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        var idade = ano - Number(fano.value)
        if (genero_masculino.checked) {
            var genero = 'Homem'
}       
        else if (genero_feminino.checked) {
            var genero = 'Mulher'
}


    }
    
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}

