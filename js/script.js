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

// function mostrarBotao () {
//     let img = document.querySelector('img')
//     const css = window.getComputedStyle(img, null).display

//     if (css === "none") {
//         document.querySelector('img').className = "appear"
//         return css;
//     }
    
// }

// function tirarBotao () {
//     let img = document.querySelector('img')
//     const css = window.getComputedStyle(img, null).display

//     if (css === "block") {
//         document.querySelector('img').className = "disappear";
//         return css;
//     }
    
