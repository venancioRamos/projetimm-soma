function somar() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let campo = document.querySelector('p')
    let soma = parseInt(n1) + parseInt(n2)
    let resultado = `o resultado da soma dos valores é ${soma}`
    campo.innerHTML = resultado
    
}