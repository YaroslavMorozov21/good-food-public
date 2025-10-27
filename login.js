document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // zapobiega przeładowaniu strony

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // przykładowa walidacja
    if(username === "admin" && password === "1234") {
        alert("Zalogowano pomyślnie!");
    } else {
        alert("Nieprawidłowa nazwa użytkownika lub hasło.");
    }
});
