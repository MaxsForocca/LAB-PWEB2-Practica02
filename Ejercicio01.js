function NameDay(d){
    if(d == 0)
        return "Domingo";
    else if (d == 1)
        return "Lunes";
    else if (d == 2)
        return "Martes";
    else if (d == 3)
        return "Miercoles";
    else if (d == 4)
        return "Jueves";
    else if (d == 5)
        return "Viernes";
    else
        return "Sabado";
}
function imprimirDia(){
    var day = new Date().getDay();
    document.getElementById("rpta").innerHTML = "Hoy es :"+ NameDay(day);
}