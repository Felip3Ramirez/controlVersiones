
document.getElementById("btnFormRegister").addEventListener("click", function () {
    document.getElementById("login-usuario").style.display = "flex";
    document.getElementById("register-usuario").style.display = "none";
});
document.getElementById("btnFormLogin").addEventListener("click", function () {
    document.getElementById("login-usuario").style.display = "none";
    document.getElementById("register-usuario").style.display = "flex";
    
});


