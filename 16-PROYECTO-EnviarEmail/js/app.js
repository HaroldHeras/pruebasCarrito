
//Le damos un listener al documento en general, para que ponga todo en funcionamiento anda más cargar

document.addEventListener("DOMContentLoaded", function (){

    //Obtenemos los elementos con los que vamos a trabajar
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");


    //Asignamos eventos a los elementos
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);





    function validar (e) {

        const mensaje = e.target.id;

        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${mensaje} es obligatorio`);
        }else{
            console.log("Si escribiste algo");
        }
    };





    function mostrarAlerta(mensaje) {

        const error = document.createElement("P");

        error.textContent = mensaje;

        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

        formulario.appendChild(error);

        


    };

    
});


