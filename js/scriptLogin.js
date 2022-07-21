function revelarSenha() {
    const senha = document.getElementById('password')
    const img = document.getElementById('img')
    if (senha.type == 'password') {
        senha.type = 'text'
        img.setAttribute('src', '../images/eyeSlashed.svg')
    } else {
        senha.type = 'password'
        img.setAttribute('src', '../images/eye.svg')
    }
}

function checarDados() {
    const nome = document.querySelector('#email').value;
    const senha = document.querySelector('#password').value;
    const nomeCadastrado = localStorage.getItem('nome');
    const senhaCadastrada = localStorage.getItem('password');
    const emailCadastrado = localStorage.getItem('email');
    let paragrafoErro = document.querySelector('#erro')

    if(!nome || !senha) {
        paragrafoErro.innerHTML = 'Favor preencher seus dados corretamente';
        return;
    } else {
        if(nome === nomeCadastrado || nome === emailCadastrado && senha === senhaCadastrada) {
            paragrafoErro.innerHTML = '';
            window.location.assign('../pages/user.html')
            return;
        } else {
            paragrafoErro.innerHTML = 'Os dados digitados estão incorretos';
            return;
        }
    }
}

window.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        checarDados()
    }
})