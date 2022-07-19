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
    const senhaCadastrada = localStorage.getItem('senha');
    const emailCadastrado = localStorage.getItem('email');
    let paragrafoErro = document.querySelector('#erro')

    if(!nome || !senha) {
        paragrafoErro.innerHTML = 'Favor preencher seus dados corretamente';
        return;
    } else {
        if(nome === emailCadastrado && senha === senhaCadastrada) {
            paragrafoErro.innerHTML = '';
            window.location.assign('https://google.com.br')
            return;
        } else {
            paragrafoErro.innerHTML = 'Os dados digitados estão incorretos';
            return;
        }
    }

}