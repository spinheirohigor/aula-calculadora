var entrada = 0;
var n1;
var n2;
control = 1;

function calculadora() {
    entrada = Number(prompt('Informe a operação desejada\n1-Somar\n2-Subtrair\n3-Dividir\n4-Saber o resto de uma divisão\n5-Multiplicação\n6-Potencialização'));

    if (entrada < 1 || entrada > 6) {
        alert(`O comando >> ${entrada} << não é válido, favor informar novamente!`);
        entrada = 0;
    }
    n1 = Number(prompt('entre com o primeiro valor'));
    n2 = Number(prompt('entre com o segundo valor'));

}

function soma() {
    resultado = n1 + n2;
    alert(`O resultado da soma entre ${n1} e ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;
    }
}
function sub() {
    resultado = n1 - n2;
    alert(`O resultado da subtração entre ${n1} e ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;

    }
}
function divi() {
    resultado = n1 / n2;
    alert(`O resultado da divisão entre ${n1} e ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;
    }
}
function resto() {
    while(n1<n2){
        alert(`O inteiro >> ${n1} é menor que ${n2} << e por isso não é válido, favor informar novamente!`);
    n1 = Number(prompt('entre com o primeiro valor'));
    n2 = Number(prompt('entre com o segundo valor'));
    }
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;
    }
}
function mult() {
    resultado = n1 * n2;
    alert(`O resultado da mult. entre ${n1} e ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;
    }
}
function pot() {
    resultado = n1 ** n2;
    alert(` ${n1} elevado a potencia de ${n2} é ${resultado}`);
    control = Number(prompt('Deseja efetuar uma nova operação?\n1-Sim\n2-Não'));
    if (control == 1) {
        entrada = 0;
    }
}
while (entrada == 0) {
    calculadora();
    switch (entrada) {
        case 1:
            soma();
            break;
        case 2:
            sub();
            break;
        case 3:
            divi();
            break;
        case 4:
            resto();
            break;
        case 5:
            mult();
            break;
        case 6:
            pot();
            break;
    }
}


console.log(entrada, n1, n2);
console.log(typeof (entrada));
