
//const idadeDependente = Number(prompt('Solicitação de dpendente \n Qual a idade do dependente?'))


/* if (idadeDependente >= 13) {
    if(idadeDependente < 18){
        console.log('Seu dependente já pode ter um cartão vinculado ao seu');
    }else{
        console.log('O dependente já pode ter seu próprio cartão');
    }
}else{
    console.log('Consulte outras possibilidades do Labank');
} */

/* if (idadeDependente >= 13 && idadeDependente <= 17) {
    console.log('Seu dependente já pode ter um cartão vinculado ao seu');
}else if(idadeDependente >17){
    console.log('O dependente já pode ter seu próprio cartão');
}else{
    console.log('Consulte outras possibilidades do Labank');
} */


//idadeDependente === 13 ? console.log('A idade do dependente é 13, ele já pode ter um cartão'): console.log('Consulte outras opções');

//SWITCH CASE
/* const escolhaCartao =Number(prompt('Solicitação de cartão de crédito \nDigite a opção desejada: \n1- Fácil \n2- Black \n3- Platinum \n4- Master Gold')) */

/* switch (escolhaCartao) {
    case 1:
        console.log('Cartão Fácil adiquirido');
        break;
    case 2:
        console.log('Cartão Black adiquirido');
        break;
    case 3:
        console.log('Cartão platinum adiquirido');
        break;
    case 4:
        console.log('Cartão Master Gold adiquirido');
        break;
    default:
        console.log('Escolha uma da quatro opções');
    break;
} */
//EXERCICIO
const numDivisivel= Number(prompt('Escreva um número:'))

/* if (numDivisivel % 2 === 0 && numDivisivel % 3 === 0) {
    console.log('Esse número é divisivel por 2 e 3');
}else{
    console.log('Esse número não é divisivel por 2 nem por 3');
}; */

//numDivisivel === 30 ? console.log('UFA ACERTEI!') : console.log('Não foi dessa vez :(');

if (numDivisivel % 2 === 0 && numDivisivel % 3 === 0) {
    switch (numDivisivel) {
        case 6:
            console.log('O número 6 é divisível por 2 e 3');
            break;
        case 12:
            console.log('O número 12 é divisível por 2 e 3');
            break;
        case 18:
            console.log('O número 18 é divisível por 2 e 3');
            break;
        case 24:
            console.log('O número 24 é divisível por 2 e 3');
            break;
        case 30:
            console.log('O número 30 é divisível por 2 e 3');
            break;
        default:
            console.log('O número é maior que 30 ou menor que 6');
            break;
    };
}else{
    console.log('Esse número não é divisível nem por 2 e nem por 3');
};


