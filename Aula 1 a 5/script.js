// function dizerNome(){
//     console.log('joão')
// }
// dizerNome()
// function multiplicaPorDois(valor){
//     return valor * 2
// }
// let resultado = multiplicaPorDois(5)
// console.log(resultado)

// let salario = 200
// console.log (- salario)

// let valorTeclado = 100
// valorTeclado+=valorTeclado
// console.log(valorTeclado)

// console.log(1==1)

// let pontos =110
// let tipo = pontos >100? 'premium':'comum'
// console.log(tipo)

// console.log(true && false)

// let maiorDeIdade= true
// let possuiCnh= true
// let podeTrabalhar= maiorDeIdade || possuiCnh
// console.log('pode trabalhar?', podeTrabalhar)
// let candidatoRecusado = !podeTrabalhar
// console.log ('Análise de Candidato', candidatoRecusado)

// let a = 'vermelho'
// let b = 'azul'
// let c = b
// b=a
// a=c


// console.log(a)
// console.log(b)

// let x = 5
// let y = 10
// let z = (x += 5)
// let o = (y -= 5)



// console.log(x)
// console.log(y)

// let hora = 19

// if(hora>6&&hora<12){
//     console.log('bom dia')
// }
// else if (hora>12&&hora<18){
//     console.log('boa tarde')
// }
// else{
//     console.log('boa noite')
// }

// let compra = 100

// if(compra>100){
//     console.log('20% de desconto')
// }
// else if (compra>50){
//     console.log('10% de desconto')
// }
// else{
//     console.log('Sem Desconto')
// }

// let idade = 16

// if(idade<12){
//     console.log('Criança')
// }
// else if(idade>12&&idade<18){
//     console.log('Adolescente')
// }
// else{
//     console.log('Adulto')
// }

// let temperatura = 15

// if(temperatura<15){
//     console.log('Frio')
// }
// else if(temperatura>15&&temperatura<30){
//     console.log('Agradável')
// }
// else{
//     console.log('Quente')
// }

// let nota = 90

// if(nota>90){
//     console.log('Nota A')
// }
// else if(nota>70&&nota<90){
//     console.log('Nota B')
// }
// else{
//     console.log('Nota C')
// }

// let velocidade = 120

// if(velocidade>120){
//     console.log('Muito rapido')
// }
// else if(velocidade>80&&velocidade<120){
//     console.log('Velocidade Adequada')
// }
// else{
//     console.log('Muito lento')
// }

// let estoque = 10

// if(estoque<10){
//     console.log('Estoque Baixo')
// }
// else if(estoque>10&&estoque<50){
//     console.log('Estoque médio')
// }
// else {
//     console.log('Estoque Alto')
// }

// let peso = 5

// if(peso<1){
//     console.log('leve')
// }
// else if(peso>1&&peso<5){
//     console.log('Médio')
// }
// else{
//     console.log('Pesado')
// }

// let altura = 50

// if(altura<50){
//     console.log('Baixa')
// }
// else if(altura>50&&altura<150){
//     console.log('Média')
// }
// else{
//     console.log('Alta')
// }

// let classificacao = 10

// if(classificacao<10){
//     console.log('infantil')
// }
// else if(classificacao>10&&classificacao<18){
//     console.log('Adolescente')
// }
// else{
//     console.log('Adulto')
// }

// let rendimento = 10

// if(rendimento<10){
//     console.log('Baixo Rendimento')
// }
// else if(rendimento>10&&rendimento<15){
//     console.log('Rendimento médio')
// }
// else{
//     console.log('Alto rendimento')
// }

// Revisão do dia 08/08 de 2024

// let pontos = 101
// let tipo = pontos > 100? "premium":"comum"         
// console.log(tipo)

// console.log(true&&false)

// console.log(true||false)

// let maiorDeIdade = true
// let possuiCnh = true
// let podeTrabalhar = maiorDeIdade&&possuiCnh    (se, ou, não) // (&&  /  ||  / !)
// console.log(!podeTrabalhar)

//Questão 1

// function avaliarDesempenho(vendas, pontualidade){
//     if(vendas > 100000 && pontualidade > 95){
//         return "Desempenho Excelente"
//     }

//     else if(vendas >= 50000 && vendas <= 100000 && pontualidade >= 85 && pontualidade <= 95){
//         return "Desempenho Bom"
//     }

//     else if(vendas < 50000 || pontualidade <85){
//         return "Desempenho Regular"
//     }
// }

// console.log(avaliarDesempenho(120000, 96));

// //Questão 2

// function aprovacaoAcademico(media, rendaFamiliar){
//     if(media >= 8.5 && rendaFamiliar <=3000){
//         return "Aprovar Bolsa Integral"
//     }

//     else if(media >= 7 && media <= 8.5 && rendaFamiliar >=3000 && rendaFamiliar <= 6000){
//         return "Aprovar Bolsa Parcial"
//     } 

//     else if(media < 7 || rendaFamiliar > 6000){
//         return "Bolsa Reprovada"
//     }
// }

// console.log(aprovacaoAcademico(8.5 , 3000))

// //Questão 3

// function calculoRisco(IMC, idade){
//     if(IMC > 30 && idade > 60){
//         return "Alto Risco"
//     }

//     else if(IMC >= 25 && IMC <= 30 && idade >=45 && idade <= 60){
//         return "Risco Médio"
//     }

//     else if(IMC < 25 || idade < 45){
//         return "Baixo Risco"
//     }
// }

// console.log(calculoRisco(31, 61))

// // Questão 4

//  function classificarCliente(rendaAnual, historicoPagamento){
//      if(rendaAnual >= 100000 && historicoPagamento == 'Excelente'){
//         return "Crédito Prime"
        
//      }

//      else if(rendaAnual >= 50000 && rendaAnual < 100000 && historicoPagamento == 'Bom'){
//         return "Crédito Padrão"
//      }

//      else if(rendaAnual < 50000 || historicoPagamento == 'Ruim'){
//         return 'Restrito'
//      }
// }

// console.log(classificarCliente(50000, 'Bom'))

// //Questão 5

// function classificarProduto(preco, demanda){
//     if(preco >= 100 && demanda >= 500){
//         return "Produto Premium"
//     }

//     else if(preco >= 50 && preco < 100 && demanda >= 200 && demanda < 500){
//         return "Produto Padrão"
//     }

//     else if(preco <50 || demanda <200){
//         return "Produto Econômico"
//     }
// }

// console.log(classificarProduto(200, 590))

// // Questão 6

// function recrutamento(experiencia, formacaoAcademica){
//     if(experiencia >= 10 && formacaoAcademica == 'Doutorado'){
//         return "Posição Sênior"
//     }

//     else if(experiencia >=5 && experiencia < 10 && formacaoAcademica == 'Mestrado'){
//         return 'Posição Plena'
//     }

//     else if(experiencia <5 || formacaoAcademica == 'Graduacao'){
//         return 'Posição Júnior'
//     }
// }

// console.log(recrutamento(10, 'Doutorado'))

// // Questão 7

// function avaliarFornecedores(qualidadeProduto, prazoEntrega){
//     if(qualidadeProduto == 'Excelente' && prazoEntrega <5){
//         return 'Fornecedor A'
//     }

//     else if(qualidadeProduto == 'Boa' && prazoEntrega >= 5 && prazoEntrega <=10){
//         return 'Fornecedor B'
//     }

//     else if(qualidadeProduto == 'Regular' || prazoEntrega >10){
//         return 'Fornecedor C'
//     }
// }

// console.log(avaliarFornecedores('Boa', 5))

// //Questão 8

// function classificarProjetos(orcamento, complexidade){
//     if(orcamento >= 1000000 && complexidade == 'Alta'){
//         return 'Projeto Estratégico'
//     }

//     else if(orcamento >= 500000 && orcamento <1000000 && complexidade == 'Média'){
//         return 'Projeto Importante'
//     }

//     else if(orcamento < 500000 || complexidade == 'Baixa'){
//         return 'Projeto Secundário'
//     }
// }

// console.log(classificarProjetos(500001, 'Média'))

// //Questão 9

// function avaliarCursos(avaliacaoAlunos, taxaConclusao){
//     if(avaliacaoAlunos >= 4.5 && taxaConclusao >= '90%'){
//         return 'Curso Excelente'
//     }

//     else if(avaliacaoAlunos >= 3.5 && avaliacaoAlunos < 4.5 && taxaConclusao >= '75%' && taxaConclusao < '90%'){
//         return 'Curso Bom'
//     }

//     else if(avaliacaoAlunos < 3.5 || taxaConclusao < '75%'){
//         return 'Cuso Regular'
//     }
// }

// console.log(avaliarCursos(3.5, '75%'))

// // Questão 10

// function classificarFilmes(usuarios, numeroVisualizacoes){
//     if(usuarios >= 4.5 && numeroVisualizacoes > 1000000){
//         return 'Filme Blockbuster'
//     }

//     else if(usuarios >= 3.5 && usuarios < 4.5 && numeroVisualizacoes >= 500000 && numeroVisualizacoes <1000000){
//         return 'Filme Popular'
//     }

//     else if(usuarios < 3.5 || numeroVisualizacoes < 500000){
//         return 'Filme Nicho'
//     }
// }

// console.log(classificarFilmes(3.5, 600000))


let permissao
permissao = 'gerente'

switch (permissao) {
    case 'comum':
        console.log ('Usuário comum')
        break;
    case 'gerente':
        console.log ('Usuário gerente')
        break;
    case 'diretor':
        console.log ('Usuário diretor')
        break;
    default:
        console.log('usuário não reconhecido')
        break;
}