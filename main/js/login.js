const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
    // Supongamos que tienes una etiqueta HTML con el id "userEmailDisplay" donde deseas mostrar el correo electrónico.
    const userEmailDisplay = document.getElementById("profile");
    userEmailDisplay.textContent =  userEmail;
} else {
    // Manejar el caso en el que no se haya ingresado un correo electrónico.
    userEmailDisplay.textContent = "Perfil"
}