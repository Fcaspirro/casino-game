let chk1 = document.getElementById("chk1");
let chk2 = document.getElementById("chk2");
let chk3 = document.getElementById("chk3");
let spin = document.getElementById("spin");

/* Parar Jackpot */

chk1.onclick = function () {
    if (chk1.checked === true) {
        chk1. disabled = "true";
    }
}
chk2.onclick = function () {
    if (chk2.checked === true) {
        chk2. disabled = "true";
    }
}
chk3.onclick = function () {
    if (chk3.checked === true) {
        chk3. disabled = "true";
    }
}

function hidechecked1(){
    if(document.getElementById('chk1').checked){
        document.getElementById('chk1').style.display = 'none';
    }
}

function hidechecked2(){
    if(document.getElementById('chk2').checked){
        document.getElementById('chk2').style.display = 'none';
    }
}   

function hidechecked3(){
    if(document.getElementById('chk3').checked){
        document.getElementById('chk3').style.display = 'none';
    }
}


/* Botão SPIN */

spin.onclick = function () {
    chk1.disabled = false;
    chk1.checked = false;

    chk2.disabled = false;
    chk2.checked = false;

    chk3.disabled = false;
    chk3.checked = false;
}