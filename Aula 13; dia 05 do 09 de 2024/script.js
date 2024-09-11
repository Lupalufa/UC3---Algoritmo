// Questão 1

// let frutas = ["maçã","banana","laranja"]
// frutas.push("uva")
// frutas.shift()
// function verificarFruta(){
//     let fruta = "maçã"
//     if(frutas.includes(fruta)){
//         console.log ("Fruta encontrada")
//     }
//     else {
//         console.log ("Fruta não encontrada")
//     }
    
// }
// verificarFruta()

// Questão 2

// function calcular(a,b,operacao){
//     if(operacao === ("soma")){
//         return a + b
//     }

//     else if (operacao === ("subtração")){
//         return a - b
//     }

//     else if (operacao === ("multiplicação")){
//         return a * b
//     }

//     else if (operacao === ("divisão")){
//         return a / b
//     }
// }

// console.log( 10,2, "soma")

// Questão 3

// let numeros = [1, 2, 3, 4, 5]
// let numerosAumentados = []

// for(let i = 0; i < numeros.length; i++){
//     numerosAumentados.push(numeros[i] + 5)
// }

// console.log(numerosAumentados)

// Questão 4

// let nota = 5
// function classificarNota(){
//     switch (true) {
//         case (nota >= 7):
//             return "Aprovado"
        
//         case (nota < 7):    
//             return "Reprovado"
//     }
// }

// console.log(classificarNota())

// Questão 5

// let numeros = [5, 10, 15, 20]

// function verificarNumero(num){
//         if (num < 10){
//             console.log ("Menor que 10")
//         }

//         else if (num >= 10 && num <= 20){
//             console.log ("Entre 10 e 20")
//         }

//         else if (num > 20){
//             console.log ("Maior que 20")
//         }
//     }
//     for (let i = 0; i < numeros.length; i++){
// }

// verificarNumero(8)

// Questão 6

// let idade = 50

// if (idade >= 18){
//     console.log('Adulto')
// }
// else {
//     console.log('Não adulto')
// }

// let idade2 = idade >= 18 && idade < 65 ? 'Adulto' : 'Não adulto'

// Questão 7

// function fizzBuzz(n){
// const numero = []
// for(let i = 1; i <= n; i++){
    
//     if(i % 3 === 0 && i % 5 === 0){
//         numero.push(i, "fizzBuzz")
//     }
//     else if (i % 3 === 0){
//         numero.push(i, "Fizz")
//     }
//     else if (i % 5 === 0){
//         numero.push( "Buzz")
//     }
//     else{
//         numero.push(i)
//     }
// }
// return numero
// }

// console.log(fizzBuzz(50))

// Questão 8

// let tarefas = ["estudar","limpar","comprar"]

// tarefas.splice(1,0,"exercitar")
// const ultimo = tarefas.splice(3,1)

// console.log(tarefas)

// Questão 9

// function calcularMedia(){
//     const nota = parseInt(prompt("Digite sua primeira nota"))
//     const notaDois = parseInt(prompt("Digite sua segunda nota"))
//     let resultado = (nota+notaDois) / 2
//     alert(`Sua Média é ${resultado}`)
// }

// calcularMedia()

// Questão 10

// let valores = [5,10,15,20]
// let valoresDivididos = []
// let i = 0
// while (i < 4) {
//     valoresDivididos.push(valores[i] / 2)
//     i++
// }

// console.log(valoresDivididos)

// Questão 11

// function compararSoma(){
//     const x = parseInt(prompt("digite um número"))
//     const y = parseInt(prompt("digite outro número"))
//     let resultado = (x + y)
//     if(resultado < 20){
//         alert("Sua nota é menor que 20")
//     }
//     else{
//         alert("Sua nota é maior que 20")
//     }

// }

// compararSoma()

// Questão 12

