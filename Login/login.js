document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('URL_DA_SUA_API/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            alert('O login realizado com sucesso!');
        } else {
            alert('Usuário ou senha incorretos. Tente novalmente com um pouco mais de calma.');
        }
    })
    .catch(error => console.error('Erro:', error));
});
