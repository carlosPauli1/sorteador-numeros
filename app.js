function sortear() {
    let quantidadeNumeros = parseInt( document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    
    let numerosSorteados = [];
    let numerosAnteriores = [];
    let numeroObtido;
    
    for (let i = 0; i < quantidadeNumeros; i++){
        numeroObtido = obterNumeroAleatorio(numeroInicial, numeroFinal)
        while (numerosSorteados.includes(numeroObtido)){
            numeroObtido = obterNumeroAleatorio(numeroInicial, numeroFinal)
        }
        numerosSorteados.push(numeroObtido);

       

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =` <label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`
    
    numerosAnteriores.push(numerosSorteados);

    let resultadoAnterior = document.getElementById('resultadoAnterior');
    resultadoAnterior.innerHTML = `<label class="texto__paragrafo">Ultimo Sorteio:  ${numerosAnteriores}</label>`

    alteraBotao();
}



function obterNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar(){
    limparCampos();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alteraBotao();
    
}

