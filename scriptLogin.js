
// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//     console.log("Hiciste Click en el Boton");
// });

// Validación

// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("Click",function(){
//     let usuario = document.getElementById("usuario").value;
//     let clave = document.getElementById("clave").value;

//     console.log("usuario ingresado: "+ usuario);
//     console.log("password ingresado: "+ clave);

// })

// Validacion
let boton = document.getElementById("btnIngresar");
boton.addEventListener("Click",function(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";

    if(usuario === "" || clave === ""){
        mensaje.textContent = "Debes completar todos los campos";
        mensaje.style.color = "orange"

    } else if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        mensaje.textContent = "Acceso permitido";
        mensaje.style.color = "green"

        setTimeout (function(){
            window.location.href = "index.html";
        }, 3000);

    } else {
        mensaje.textContent = "Usuario o Contreña incorrectos";
        mensaje.style.color = "green"
    }
    
});