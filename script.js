/* 
Solicitar o nome do aluno e as 3 notas do bimestre e caucular a me´dia daquele aluno

se o aluno passo no bimestre, dar os  parabèns

se o anulo não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação

em ambos os casos, mostre uma mesangem com o nome do aluno e a nota
*/


const name = prompt("Informe seu nome:")
const firstNote = Number(prompt("Informe a primeira nota:"))
const secondNote = Number(prompt("Informe a segunda nota:"))
const thirdNote = Number(prompt("Informe a terceira nota:"))


const result = (firstNote + secondNote + thirdNote) / 3

result = result.toFixed(2)

if(result >= 6){
    alert("Parabéns " + name + " você foi aprovado com uma média de " + result)
}else{
    alert("Infelizmente você não passou " + name + " sua média foi de " + result + ", mas continue estudado que na proxima você passa!")
}