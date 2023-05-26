<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Práctica de Laboratorio</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>

<div align="center">
<span style="font-weight:bold;">GUÍA DE LABORATORIO</span><br />
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">JavaScript</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>02</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>
<tr>
<td>FECHA INICIO:</td><td>02-May-2022</td><td>FECHA FIN:</td><td>06-May-2022</td><td>DURACIÓN:</td><td>04 horas</td>
</tr>
<tr><td colspan="6">INTEGRANTES:
    <ul>
        <li>Forocca Mamani Maxs Sebastian Joaquin</li>
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTE:
<ul>
<li>Anibal Sardon</li>
</ul>
</td>
</<tr>
</tdbody>
</table>


#


## EJERCICIOS PROPUESTOS
- Ejercicio 01: Escriba una función que reciba el número de día de la fecha actual new Date() - https://www.w3schools.com/jsref/jsref_obj_date.asp y devuelva el texto del día de la semana correspondientes. Por ejemplo si recibe 0, devolvería “Domingo”.
  El codigo html contiene un button que al hacerle click llamara a la funcion imprimirDia(). Tambien se tiene un parrafo con el id "rpta" para usarse en el script
  -![ejercicio01HTML.jpg](ejercicio01HTML.jpg)
  El script posse la funcion NameDay() que retornara el nombre del dia deacuerdo al parametro d, tambien esta la funcion imprimirDia() que tiene la variable day (resultado del metodo getDate()) y cambiara el texto del elemento que tenga el id = rpta.
  -![ejercicio01JS.jpg](ejercicio01JS.jpg)
  
- Ejercicio 02: Escriba una página web que reciba un texto y al presionar un botón muestre el mismo texto invertido en otra sección (div). Por ejemplo si se escribe “Hola”, se mostraría como “aloH”.
  El documento HTML posee un input text que contendra al texto a inverti y submit que serviran para llamar la funcion palindromo.
  -![ejercicio02HTML.jpg](ejercicio02HTML.jpg)
  El script captara el valor del input text y con un for y el metodo charAt creara una nueva cadena invertida y lo mostrara en la pagina. 
  -![ejercicio02JS.jpg](ejercicio02JS.jpg)
  
- Ejercicio 03: Escribir una página que muestre cuántos días faltan para el día de Arequipa!
  Para este ejecicio se crea un script dentro del HTML, que creara fechas del dia actual y el dia de arequipa, posterios a ello se restan los milisegundos que lleva cada fecha (con el metodo getTime). Y se calcula en dias los milisegundo resultantes, retornado el resultado y mostrando en la pagina la respuesta.
  -![ejercicio03.jpg](ejercicio03.jpg)
  
- Ejercicio 04: Escribir un página que reciba el URL de la sesión de google meet de hoy y devuelva el código de la sesión sin guiones separadores
  El HTML es muy parecido al del ejercicio 2 solo que se llama a la funcion codigo URL.
  -![ejercicio04HTML.jpg](ejercicio04HTML.jpg)
  El script consigue el valor del input text y se verifica si este es un codigo de meet, si ese es el caso, se procede conseguir el codigo con el metodo substring.
  -![ejercicio04JS.jpg](ejercicio04JS.jpg)
  
- Ejercicio 05: Escribir una página que permita calcular las suma de todos los valores de una tabla de valores dinámica. La idea es crear una página web con un formulario que te permita decir cuantos valores tendrá la tabla, luego, al enviar el formulario la tabla se debe crear dinámicamente, junto con otro botón de envió para calcular la suma.
  En el HTML se tiene un label, un input number y un input submit que llamara a la funcion crearTablas, tambian hay un div con id = tablas, que servira para almacenar los elementos que se crearan.
  -![ejercicio05HTML.jpg](ejercicio05HTML.jpg)
  En el script se encuentra la funcion crearTablas, que capta el valor del input number del HTML y el div, segun el valor de input se crearan y añadiran nuevos inputs (metodos createElement y appendChild) en el div como tambien un button que llama a la funcion sumar, en esta funcion se capta los inputs creados con crearTablas (querySelectorAll) y se suman los valores mostrando el resultado en la pagina.
  -![ejercicio05JS.jpg](ejercicio05JS.jpg)
  
- Ejercicio 06: Utilice la herramienta flipgrid - https://info.flipgrid.com/ envie un video en el tema "Presentacion y ejemplo deJavaScript" ponga aquí los enlaces de sus envíos.
  enlace del video: - https://flip.com/s/cWF27DvUoigf

#

## CUESTIONARIO
-Pruebe este código de arrayGenerator() en la página https://jslint.com/
-Revisar esta discusión en stackoverflow - https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
  - ¿Cómo se pueden resolver los warnings?
  - ¿Se puede modificar la solución usando map? ¿Cómo?
  

#

## REFERENCIAS
- links

#
