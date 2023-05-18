function palindromo(t){
    var p = document.getElementById(t).value;
    var aux = "";
    for (var i = p.length-1; i>=0; i--){
        aux = aux + p.charAt(i);
    }
    document.getElementById("respuesta").innerHTML = "Palindromo: "+aux;
}