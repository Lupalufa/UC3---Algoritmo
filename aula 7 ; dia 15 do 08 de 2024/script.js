// loop (for) : laço de repetição, ele é dividido em três partes:
// inicialização: É executada uma vez no inicio do loop
// Condição : Verificar se o loop deve continuar ou parar
// Incremento : Atualiza a variável de controle após cada iteração 

// exemplo

// for (let i = 0; i < 5; i++){             // essa linha de codigo diz q o (for) ira repetir o numero de 1 a 4, mas pq ate 4? 
//     console.log(i);                      // por que i é menor q (<) 5, se fosse (<= 5) ele iria repetir do 1 a 5 pois, tem q
// }                                       // ser impresso do 1 a igual a 5 e assim sucessivamente
// para que serve o (i++)? Ele ira somar o laço que fara com que apos a impressão do 1° ele some-se e imprima o 2° e assim sucessivamente



// Loop (While) : quando usar? quando você não sabe o numero exato de iterações, mas quer que o loop continue até que uma determinada 
//condição seja falsa
// Estrutura: o (while) é mais simples e só requer uma condição. O código dentro do loop será repetido enquanto essa condição for 
//verdadeira
// A inicialização e o incremento são feitos fora do loop, o que dá mais flexibilidade, mas também exige mais cuidado para evitar loops
// infinitos

// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++
// }

// Atividade

// Questão 1

// for (let a = 1; a <= 10; a++){
//     console.log(a)
// }

// Questão 2

//  let b = 1;
//  while (b <= 10) {
//      console.log(b)
//      b++    
//  }

// Questão 3

// let soma = 0
// for (let c = 1; c <= 5; c++){
//     soma = soma + c
// }

// console.log(soma)

// Questão 4

// let somar = 0
// let d = 1
// while (d <=5) {
//     somar = somar + d
//     d++
// }
// console.log(somar)

// Questão 5

// let multiplica = 1
// for (let e = 1; e <= 4; e++){
//     multiplica = multiplica * e
// }

// console.log(multiplica)

// Questão 6

// let multiplicar = 1
// let f = 1
// while (f <=4) {
//     multiplicar = multiplicar * f
//     f++
// }

// console.log(multiplicar)

// Questão 7

// for (let g = 1; g <= 10; g++){
//     if(g % 2 === 0){
//         console.log(g,'Número Par')
//     }
//     else{
//         console.log(g,'Número Impar')
//     }
// }

// Questão 8

// let h = 1
// while (h <= 10) {
//     if(h % 2 === 0){
//         console.log(h,'Número Par')
//     }
//     else{
//         console.log(h,'Número Impar')
//     }
//     h++
// }

// Questão 9

// for (let i = 1; i <= 20; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i, 'FizzBuzz')
//     }
//     else if(i % 3 === 0){
//         console.log(i, 'Fizz')
//     }
//     else if(i % 5 === 0){
//         console.log(i,'buzz')
//     }
//     else{
//         console.log(i)
//     }
// }

// Questão 10

// function escolhaDeOperacao (paramentro){
//     switch (paramentro) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }

// Questão 1 / 2° lista

// function verificarIdade(listaDeIdades){
//     for (let i = 0; i < listaDeIdades.length;i++){
//         if (listaDeIdades[i] < 18){
//             return 'Alguem não pode entrar'
//     else{
//         return 'Todos podem entrar'
//     }
// }}

// let idades = [15, 22, 19, 20];
// console.log(verificarIdade(idades))

// Questão 2

// function verificarNumeros(){
//     let numeroPar = 1
//     let contador = 0
//     while (numeroPar <= 50) {
//         if (numeroPar % 2 === 0){
//         contador = contador + 1;
//         }
//         numeroPar++
        
//     }
//     return contador
// }
// console.log(verificarNumeros())

//Questão 3

// function classificarCor(numero){
//     switch (numero) {
//         case 1:
//             return 'Cor Clara'
//         case 2:
//             return 'Cor Média'
//         case 3:
//             return 'Cor Escura'
//         default:
//             return "Cor Desconhecida"
//     }
// }
// console.log(classificarCor(1))

//Questão 4

// function validarSenha(senha){
//     const comprimento = senha.length;
//     switch (true) {
//         case (comprimento < 8):
//             return 'Senha Fraca';
//         case (comprimento >= 8 && comprimento <= 12):
//             return 'Senha Média';
//         case (comprimento > 12):
//             return 'Senha Forte';
//     }
// }

// console.log(validarSenha("abc123"));

//Questão 5

// function classificarNota(classificar){

// switch (true) {
//     case (classificar >= 90):
//         return "Nota A"

//     case (classificar >= 80 && classificar <= 89):
//         return "Nota B"

//     case (classificar >= 70 && classificar <= 79):
//         return "Nota C";

//     case (classificar >= 60 && classificar <= 69):
//         return "Nota D";

//     case (classificar < 60):
//        return "Nota F";


// }}

// console.log(classificarNota(89))

// Questão 6

// function fizzBuzz(){
// for (let i = 1; i <= 100; i++){
//     if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
//         console.log (i, 'FizzBuzzBoom')
//     }
//     else if(i % 2 && i % 3 === 0){
//         console.log (i, 'FizzBuzz')
//     }
//     else if(i % 3 === 0 && i % 5 === 0){
//         console.log (i, 'BuzzBoom')
//     }
//     else if(i % 2 === 0 && i % 5 === 0){
//         console.log (i,'FizzBoom')
//     }
//     else if(i % 2 === 0){
//         console.log (i, 'Fizz')
//     }
//     else if (i % 3 === 0){
//         console.log (i, 'Buzz')
//     }
//     else if(i % 5 === 0){
//         console.log (i, 'Boom')
//     }
//     else{
//         console.log (i)
//     }
// }
// }

// fizzBuzz()

// function personalizarNota(avaliacao){

//     switch (true) {
//         case (avaliacao = A):
//             return 'Excelente trabalho!'

//         case (avaliacao = B):
//             return 'Bom trabalho!'

//         case (avaliacao = C):
//             return 'trabalho ruim'

//     }
// }

// console.log(personalizarNota(A))


