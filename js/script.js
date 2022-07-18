function revelarSenha() {
    const img = document.querySelector('img#eye')
    const input = document.querySelector('#password')
    if (input.type === 'password') {
        input.type = 'text'
        img.setAttribute('src', 'images/eye-slashed.svg')
    } else {
        input.type = 'password'
        img.setAttribute('src', 'images/eye.svg')
    }
}

// Fazer ele salvar os dados no navegador!

// function guardaDados() {
//     const nome = document.querySelector('#password').value;
//     const paragrafoErro = document.querySelector('#erro')
//     function guardaNome() {
//         if (!nome) {
//             return paragrafoErro.innerHTML = 'FAVOR COLOQUE SEU NOME';
//         }
//     }
// }
// guardaDados()