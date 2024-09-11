function classificarNota(){
    const nota = parseInt(prompt('Digite a nota do aluno de 0 a 100'))
    let resultado;
    if (nota >= 90) {
        resultado = 'A. Excelente trabalho!'
    }
    else if (nota >=80) {
        resultado = 'B. Bom trabalo!';
    }
    else if (nota >= 70) {
        resultado = 'C. Trabalho satisfatório.';
    }
    else if (nota >= 60){
        resultado = 'D. Precisa melhorar.'
    }
    else {
        resultado = 'F de Se-Fudeu'
    }
    alert(`Sua nota é ${resultado}`);
}

classificarNota()