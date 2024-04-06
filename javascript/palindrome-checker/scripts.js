const inputTexto = document.getElementById("texto-input");
const btnVerificar = document.getElementById("verifica-btn");
const resultadoDiv = document.getElementById("resultado");

function limparEntrada(entrada){
    const entradaLimpa = entrada.trim();
    const entradaSemPontuacao = entradaLimpa.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const entradaMinuscula = entradaSemPontuacao.toLowerCase();
    return entradaMinuscula;
}  

function verificarPalindromo(texto) {
    const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}

function exibirResultado(resultado) {
    resultadoDiv.textContent = resultado ? "É um palíndromo!" : "Não é um palíndromo"
}

btnVerificar.addEventListener("click", function() {
    const texto = inputTexto.value;
    const resultado = verificarPalindromo(texto);
    exibirResultado(resultado);
});