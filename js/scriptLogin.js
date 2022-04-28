function revelarSenha() {
    const senha = document.getElementById('text4')
    const img = document.getElementById('img')
    if (senha.type == 'password') {
        senha.type = 'text'
        img.setAttribute('src', '../images/eye-slashed.svg')
    } else {
        senha.type = 'password'
        img.setAttribute('src', '../images/eye.svg')
    }
}