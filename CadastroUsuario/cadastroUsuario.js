const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function () {

    if (campoSenha.type == "password") 
    {
        campoSenha.type = "text";
    }

    else 
    {
        campoSenha.type = "password";
    }
})

const campoConfirmarSenha = document.getElementById("confirmar-senha");
const btnConfirmarSenha = document.querySelector("#mostrar-confirmar-senha");

btnConfirmarSenha.addEventListener("click", function () {


    if (campoConfirmarSenha.type == "password") 
    {
        campoConfirmarSenha.type = "text";
    }

    else 
    {
        campoConfirmarSenha.type = "password";
    }
})