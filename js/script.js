function revelarSenha() {
    const img = document.querySelector('img#eye')
    const input = document.querySelector('#password')
    if (input.type === 'password') {
        input.type = 'text'
        img.setAttribute('src', 'images/eyeSlashed.svg')
    } else {
        input.type = 'password'
        img.setAttribute('src', 'images/eye.svg')
    }
}

// Fazer ele salvar os dados no navegador!

function guardaDados() {
    const nome = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#password').value;
    const paragrafoErro = document.querySelector('#erro')
    if (!nome) {
        paragrafoErro.innerHTML = 'Favor preencher seu nome';
        return;
    } else {
        paragrafoErro.innerHTML = ''
    }

    if (!email) {
        paragrafoErro.innerHTML = 'Favor preencher seu e-mail';
        return;
    } else {
        paragrafoErro.innerHTML = ''
    }

    if (!senha) {
        paragrafoErro.innerHTML = 'Favor preencher sua senha';
        return;
    } else {
        paragrafoErro.innerHTML = ''
    }

    if(localStorage.getItem('nome' || 'email' || 'senha')) {
        paragrafoErro.innerHTML = 'Já estão cadastrados usuários neste computador!';
        return;
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('password', senha);
    location.assign('pages/user.html')
}

window.addEventListener('keypress', function(e) {
    if(e.code === 'Enter') {
        return guardaDados();
    }
})