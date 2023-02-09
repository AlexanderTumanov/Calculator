let newresult = 0;
hist = null;
used = 0;

function get() {
    numb1 = parseFloat(document.getElementById("num1").value);
    numb2 = parseFloat(document.getElementById("num2").value);    
}


function check() {
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        document.getElementById("result").innerHTML = "please enter a number";
    }
}

function add() {
    get();
    check();
    newresult = numb1 + numb2;
    update();
}

function subtract() {
    get();
    check();
    newresult = numb1 - numb2;
    update();
}

function multiply() {
    get();
    check();
    newresult = numb1 * numb2;
    update();
}

function divide() {
    get();
    check();
    newresult = numb1 / numb2;
    update();
}

function update() {
    document.getElementById("result").innerHTML = newresult;
    if (used == 0) {
        hist = newresult;
        document.getElementById("history").innerHTML = hist;
        used ++;
    }
    else if (used == 1) {
        hist = newresult
        used ++;
    }
    else if (used > 1) {
        document.getElementById("history").innerHTML = hist;
        hist = newresult;
    }
}

