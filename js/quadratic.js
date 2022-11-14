function Quadr(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    
    delta = eval(Math.pow(parseInt(b), 2) - 4 * parseInt(a) * parseInt(c));
    
    document.getElementById("delta").innerHTML = delta;
    
    x1 = eval((-parseInt(b) + Math.sqrt(delta)) / 2 * parseInt(a));
    x2 = eval((-parseInt(b) - Math.sqrt(delta)) / 2 * parseInt(a));
    
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("x2").innerHTML = x2;
    }
    