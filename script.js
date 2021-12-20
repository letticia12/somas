function enviar () {
    textpar = document.querySelector('#par');
    let par = parseInt(txpar.value);
    let divNumero = document.querySelector('#numero');

    let par = calculanumero (par);

    let div = document.createElement('div');
    div.textContent = par;
    divNumero.append(div);

    
}

function calculanumero(par) {
    let par = 2; 4; 6; 8 - par
    return par;

}

function enviar () {
    textimpar = document.querySelector('#impar');
    let impar = parseInt(tximpar.value);
    let divNumero = document.querySelector('#numero');

    let impar = calculanumero (impar);

    let div = document.createElement('div');
    div.textContent = impar;
    divNumero.append(div);
    
}

function calculanumero(impar) {
    let impar = 1; 3; 5; 7; 9 - impar
    return impar;

}