function revelarSenha() {
    const img = document.querySelector('img')
    const input = document.querySelector('#text3')
    if (input.type === 'password') {
        input.type = 'text'
        img.setAttribute('src', 'images/eye-slashed.svg')
    } else {
        input.type = 'password'
        img.setAttribute('src', 'images/eye.svg')
    }
}  
