function Tri(){
    base = document.getElementById("base-triangle").value;

    height = document.getElementById("altura-triangle").value;

    result = eval((parseInt(base) * parseInt(height)) / 2);

    document.getElementById("result-area-text").innerHTML = result;
}