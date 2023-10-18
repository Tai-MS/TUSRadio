const email = document.getElementById("email")
const pass = document.getElementById("pass")
const confirmPass = document.getElementById("pass2")
const submit = document.getElementById("continuar")

submit.addEventListener("click", () => {
    const data = {
        email: email.value,
        pass: pass.value,
        confirmPass: confirmPass.value
    }

    localStorage.setItem("userEmail", data.email);

    if(data.email || data.pass || data.confirmPass){

        if(data.email && data.pass === data.confirmPass){
            window.location.href = "/"
        }else if(data.pass != data.confirmPass){
            completar.innerHTML = "Las contraseñas deben ser iguales"
        }
        else{
            completar.innerHTML = "Completa todos los campos"
        }
    }
})





