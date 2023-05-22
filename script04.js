function codigoURL(){
    var url = document.getElementById("url").value;
    if (url.substring(0,24) == "https://meet.google.com/"){
        var codigo = url.substring(24,36);
        codigo = codigo.substring(0,3) + codigo.substring(4,8) + codigo.substring(9,12);
        document.getElementById("rpta").innerHTML = "El codigo de la reunion es: "+codigo;
    }else{
        document.getElementById("rpta").innerHTML = "No se ingreso una url de meet";
    }
}