const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');

const resultado = document.getElementById('result');

function somar(){
    resultado.textContent = Number(numero1.value) + Number(numero2.value);
}
function subtrair(){
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
}
function multiplicar(){
    resultado.textContent = Number(numero1.value) * Number(numero2.value);
}
function dividir(){
    resultado.textContent = Number(numero1.value ) / Number(numero2.value);
}
function limpar(){
    numero1.value = "";
    numero2.value = "";
    resultado.innerHTML= "";
}


function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}

function par() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 % 2 == 0 && valorNum2  % 2 == 0){
         resultado.textContent = "Ambos são PARES"
    } else if (valorNum1 % 2 != 0 && valorNum2  % 2 == 0){
        resultado.textContent = "Nº 1 é IMPAR e Nº 2 é PAR"
    }else if (valorNum1 % 2 == 0 && valorNum2  % 2 != 0){
        resultado.textContent = "Nº 1 é PAR e Nº 2 é IMPAR"
    }else{
        resultado.textContent = "ambos são IMAPRES"
    }
}

function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}

function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}

function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}

function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}

function maior() {
    const valorNum1 = Number(numero1.value);
    const valorNum2 = Number(numero2.value);

    if(valorNum1 > valorNum2){
         resultado.textContent = "O Nº 1 é MAIOR"
    }
}
