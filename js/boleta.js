const dateInput = document.getElementById('date');


dateInput.value = formatDate();

console.log(formatDate());

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
    return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
    ].join('-');
}

// Devuelve true si la tecla pulsada es un número o la tecla de retroceso, y false en caso contrario.
function validarTeclaValor(evt){
    //El codigo valida que tecla presiona el usuario
    var code = (evt.wich) ? evt.wich : evt.keyCode;

    if (code == 8){
        return true;
    } else if(code == 36){
        return true;
    } else if (code >= 48 && code <= 57){
        return true;
    } else{
        return false;
    }
}
function validarTeclaCantidad(evt){
    var code = (evt.wich) ? evt.wich : evt.keyCode;

    if (code == 8){
        return true;
    } else if (code >= 48 && code <= 57){
        return true;
    } else{
        return false;
    }
}

// Modificación de atributos del formulario
date.readOnly = true;
rut.required = true;
nombre.required = true;
cantidad.required = true;
valor.required = true;