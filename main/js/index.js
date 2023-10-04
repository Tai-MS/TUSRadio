const email = document.getElementById("email")
const pass = document.getElementById("pass")
const submit = document.getElementById("continuar")

submit.addEventListener("click", (event) =>{
    event.preventDefault()

    const data = {
        email: email.value,
        pass: pass.value
    }

    localStorage.setItem("userEmail", data.email);
    console.log(data);
    if(data.email && data.pass){
        window.location.href = "index.html"
    }else{
        alert("Completa")
    }
})







