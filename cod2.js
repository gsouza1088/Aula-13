var altura = parseFloat (prompt("Digite a altura: "))
var peso =  parseFloat (prompt("Digite seu peso: "))
var valor = (peso / (altura * altura))
var m = valor.toFixed (2)
alert(m) 
if (m < 16)
{var i = 'Extremamente abaixo do peso'}

else if (m > 16 && m < 17)
{var i = 'Muito abaixo do peso'}

else if (m > 17 && m < 19)
{var i = 'Abaixo do peso'}

else if ( m > 19 && m < 25)
{var i = 'Peso normal'}

else if (m > 25 && m < 30)
{var i = 'Sobre peso'}

else if (m > 30 && m< 35)
{var i = 'Obesidade de 1º grau'}

else if (m> 35 && m<40)
{var i = 'Obsidade de 2º grau'}
else if (m >40)

{ var i = 'Obsidade de 3º grau'}
alert (i)
document.write ( "Meu IMC é:"+m+" Seu índice de M. corporal é "+i);





