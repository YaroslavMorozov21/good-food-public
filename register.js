document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // zapobiega przeładowaniu strony

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username && email && password) {
        alert("Zarejestrowano pomyślnie!");
        window.location.href = "login.html"; // po rejestracji przechodzimy do logowania
    } else {
        alert("Proszę wypełnić wszystkie pola!");
    }
});
