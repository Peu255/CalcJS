function power(){

    base = document.getElementById("base").value;

    expoente = document.getElementById("expoente").value;

    result = eval(Math.pow(parseInt(base), parseInt(expoente)));

    document.getElementById("result").innerHTML = result;
}
