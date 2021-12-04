/*var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.65 02/12/2021
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)*/

const valor = document.querySelector('button')

valor.onclick = () => {
var dolar = Number(document.querySelector('input').value.replace('.',','))
  if (dolar < 1) {
      document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
      document.querySelector('span').innerHTML = (dolar * 5.65).toFixed(2) + ' reais'
  }  
}