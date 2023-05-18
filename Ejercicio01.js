var day = new Date().getDay();
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
console.log(NameDay(day));