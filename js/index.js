Usuario.required = true;
password.required = true;

function login(){
    
    Usuario = document.getElementById('Usuario').value;
    password = document.getElementById('password').value;
    
    if(Usuario == "Admin" && password == 12345){
        formulario=document.getElementById('form1');
        formulario.setAttribute("action",'usuario.html');
        document.form1.submit();

    }
    else if (Usuario == ''){
        alert("Ingrese su usuario");
        return(false);
    }
    else if(password == ''){
        alert("Ingrese su contraseña");
        return(false);
    }
    else {
        alert("Credenciales incorrectas. Vuelva a intentarlo.");
        return(false);
    }
}