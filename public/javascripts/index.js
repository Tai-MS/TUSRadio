const email = document.getElementById("email")
const pass = document.getElementById("pass")
const submit = document.getElementById("continuar")
const completar = document.getElementById("completar")

submit.addEventListener("click", (event) =>{
    event.preventDefault()

    const data = {
        email: email.value,
        pass: pass.value
    }

    localStorage.setItem("userEmail", data.email);
    console.log(data);
    if(data.email && data.pass){
        window.location.href = "/"
    }else{
        completar.innerHTML = "Completa todos los campos"
    }
})







