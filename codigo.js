const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btns");
const boton = document.getElementById('boton')
const historial = document.getElementById('cuerpo')

var fechaActual = new Date();
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se agrega 1
var año = fechaActual.getFullYear();
var fecha = dia + "/" + mes + "/" + año

var formato = fechaActual.getHours()>12?'pm':'am'
var hora = fechaActual.getHours()+':'+fechaActual.getMinutes()+' '+formato

var i=0
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        let texto = pantalla.textContent
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);

             //uso del localstorage
               localStorage.setItem(`resultado_${i++}`,texto+' = '+ eval(pantalla.textContent))
             
                historial.innerHTML +=`
  <tr>
      <th scope="row">${i}</th>
      <td>${texto}</td>
      <td>${eval(pantalla.textContent)}</td>
      <td>${fecha}</td>
      <td>${hora}</td>
    </tr>
`


 
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})



boton.addEventListener('click',()=>
{
localStorage.clear()
i=0
historial.innerHTML = ''
})













