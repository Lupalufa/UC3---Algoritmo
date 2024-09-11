//Questão 1

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//     }
//     alert(`Sua nota é ${resultado}`)
// }

// classificarNota()

//Questão 2

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota retirada(0 a 100)'))
//     let intervaloA = parseInt(prompt('Defina qual nota será para A'))
//     let intervaloB = parseInt(prompt('Defina qual nota será para B sendo inferior a nota A'))
//     let intervaloC = parseInt(prompt('Defina qual nota será para C sendo inferior a nota B'))

//     let resultado;
//     if (nota >= intervaloA) {
//         resultado = 'A'
//     }
//     else if (nota >= intervaloB) {
//         resultado = 'B'
//     }
//     else if (nota >= intervaloC) {
//         resultado = 'C'
//     }
//     alert(`Sua nota é ${resultado}`)
// }

// classificarNota()

//Questão 3

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota retirada(0 a 100)'))
//     if (nota < 0 || nota > 100) {
//         alert('Sua nota é incorreta, Por favor. reajuste sua nota')
//         return;
//     }

//     let intervaloA = parseInt(prompt('Defina qual nota será para A'))
//     let intervaloB = parseInt(prompt('Defina qual nota será para B sendo inferior a nota A'))
//     let intervaloC = parseInt(prompt('Defina qual nota será para C sendo inferior a nota B'))

//     let resultado;
//     if (nota >= intervaloA) {
//         resultado = 'A'
//     }
//     else if (nota >= intervaloB) {
//         resultado = 'B'
//     }
//     else if (nota >= intervaloC) {
//         resultado = 'C'
//     }
//     alert(`Sua nota é ${resultado}`)
// }

// classificarNota()

// Questão 4

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//     }
//     else if (nota < 60 && nota >= 55) {
//         resultado = 'F. Mas você está quase lá'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//     }
//     alert(`Sua nota é ${resultado}`)
// }

// classificarNota()

// Questão 5

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     let sugestao;
//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//         sugestao = 'Continue assim!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//         sugestao = 'Continue se esforçando'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//         sugestao = 'Estude um pouco mais, esta no caminho certo'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//         sugestao = 'Precisa se esforçar mais, com um pouco de persistencia você consegue'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//         sugestao = 'Vá estudar seu FACAPUNTO'
//     }
//     alert(`Sua nota é ${resultado}`)
//     alert(`Sua sugestão é ${sugestao}`)
// }

// classificarNota()

//Questão 6

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota do aluno de (0 a 100)'))
//     const sugestao = prompt('Digite sua sugestão para o aluno')
//     let resultado;
//     if(nota > 90) {
//         resultado = 'A. Excelente trabalho!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//     }
//     alert(`Sua nota é ${resultado}. Sua sugestão é ${sugestao}`)
// }

// classificarNota()

//Questão 7

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let faixa;
//     if (nota > 90) {
//         faixa = '90 - 100'
//     }
//     else if (nota >= 80) {
//         faixa = '80 - 89'
//     }
//     else if (nota >= 70) {
//         faixa = '70 - 79'
//     }
//     else if (nota >= 60) {
//         faixa = '60 - 69'
//     }
//     else {
//         faixa = '0 - 59'
//     }
//     alert(`Sua nota esta entre ${faixa}`)
// }

// classificarNota()

// Questão 8

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     let faixa;

//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//         faixa = '90 - 100'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//         faixa = '80 - 89'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//         faixa = '70 - 79'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//         faixa = '60 - 69'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//         faixa = '0 - 59'
//     }
//     alert(`Sua nota é ${resultado}. Faixa da nota ${faixa}`)
// }

// classificarNota()

// Questão 9

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//         if (nota <= 59) {
//         alert('Você irá precisar fazer uma prova de recuperação')
//         }
//     }
//     alert(`Sua nota é ${resultado}`)
    
// }

// classificarNota()

//Questão 10

// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota de todos os alunos (0 a 100)'))
//     let resultado;
//     let sugestao;
//     if (nota > 90) {
//         resultado = 'A. Excelente Trabalho!'
//         sugestao = 'Continue assim!'
//     }
//     else if (nota >= 80) {
//         resultado = 'B. Bom trabalho!'
//         sugestao = 'Continue se esforçando'
//     }
//     else if (nota >= 70) {
//         resultado = 'C. Trabalho Satisfatório'
//         sugestao = 'Estude um pouco mais, esta no caminho certo'
//     }
//     else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar.'
//         sugestao = 'Precisa se esforçar mais, com um pouco de persistencia você consegue'
//     }
//     else {
//         resultado = 'F. Se fudeu'
//         sugestao = 'Vá estudar seu FACAPUNTO'
//     }
//     alert(`Sua nota é ${resultado}`)
//     alert(`Sua sugestão é ${sugestao}`)
// }