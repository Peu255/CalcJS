function Sqrt(){
    radicando = document.getElementById("radicando").value;

    result = eval(Math.sqrt(parseInt(radicando)));

    document.getElementById("result").innerHTML = result;
}