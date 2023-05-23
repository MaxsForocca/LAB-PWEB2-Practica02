function crearTablas(){
    var cant = document.getElementById("cant").value;
    const divT = document.getElementById("tablas");
    for(let i = 0; i < cant; i++){
        let input = document.createElement("input");
        input.id = "tabla"+i;
        input.type = "number";
        input.value = 0;
        divT.appendChild(input);
        divT.appendChild(document.createElement("br"));       
    }
    var BSum = document.createElement("button");
    BSum.id = "botonSumar";
    BSum.textContent = "sumar";
    BSum.onclick = "sumar()";
    divT.appendChild(BSum);     
}
function sumar(){
    console.log("la funcion de sumar de inicio");
    var sum = 0;
    for(let i = 0; i < cant; i++){
        sum = sum + document.getElementById("tabla"+i).value;
    }
    divT.appendChild(document.createElement("br"));
    const rpta = document.createElement("p");
    rpta.textContent = "La respuesta es :" + sum;
    divT.appendChild(rpta);
}