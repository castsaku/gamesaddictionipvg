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
function control() {

    if (document.getElementById('uname') == null || document.getElementById('uname')=="") {
        alert("El campo no puede estar vacío.");
        document.getElementById('uname').focus();
        return false;
    }

    return true;
}