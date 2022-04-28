function revelarSenha() {
    const img = document.getElementById('img')
    const senha = document.getElementById('text3')
    if (senha.type == 'password') {
        senha.type = 'text'
        img.setAttribute('src', 'images/eye-slashed.svg')

    } else {
        senha.type = 'password'
        img.setAttribute('src', 'images/eye.svg')
    }
}