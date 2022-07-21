function mostrarNome() {
    const nomeParagrafo = document.querySelector('#name');
    const nomeObject = [localStorage.getItem('nome').split(' ')];
    const primeiroNome = nomeObject[0];
    nomeParagrafo.innerHTML = `Olá ${primeiroNome[0]}`;
}

function mostrarEmail() {
    const emailParagrafo = document.querySelector('#email');
    const email = localStorage.getItem('email');
    emailParagrafo.innerHTML = email;
}

function mostrarSenha() {
    const senhaParagrafo = document.querySelector('#password');
    const senha = localStorage.getItem('password')

    senhaParagrafo.innerHTML = senha
}

function mudarSenha() {
    const label = document.querySelector('#label');
    const novaSenhaInput = document.querySelector('#novaSenha');
    const save = document.querySelector('#save');

    label.style.display = 'inline-block';
    novaSenhaInput.style.display = 'inline-block';
    save.style.display = 'inline-block';

    save.addEventListener('click', function() {
        const novaSenha = novaSenhaInput.value;
        localStorage.setItem('password', novaSenha)
        label.style.display = 'none';
        novaSenhaInput.style.display = 'none';
        save.style.display = 'none';
        location.reload()
    })
}

function limparDados() {
    localStorage.clear();
    location.assign('../index.html');
}

mostrarNome()
mostrarEmail()
mostrarSenha()