var form = document.forms['frm-1']
var lname = document.getElementById('lblnombre')
var lsurname = document.getElementById('lblapellido')

form.onsubmit = function (ev) {
    console.log(ev)
    // Si bien hago un control por formulario, tambien hago un control de los campos por funcion
    if (lname.value == "" || lsurname.value == "") {
        ev.preventDefault()
        alert('Falta completar algún dato')
    } else {
        textoname = lname.value
        if (textoname.indexOf('@') == -1) {
            alert('El nombre debe contener un caracter @')
            ev.preventDefault()
        }
    }
}


