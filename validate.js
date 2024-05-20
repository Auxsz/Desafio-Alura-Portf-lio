//Seu JavaScript de validação aqui

function validarForm(event) {
    event.preventDefault();


    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const nomeError = document.getElementById('name__error');
    const emailError = document.getElementById('email__error');
    const assuntoError = document.getElementById('assunto__error');
    const mensagemError = document.getElementById('mensagem__error');

    nomeError.textContent = '';
    emailError.textContent = '';
    assuntoError.textContent = '';
    mensagemError.textContent = '';

    let formValido = true
    
    if(!nome || nome.length > 50) {
        nomeError.textContent = 'O nome é obrigatório e deve ter no máximo 50 caracteres.'
        formValido = false;
    }

    if (!email || !validarEmail(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        formValido = false;
    }

    if (!assunto || assunto.length > 50) {
        assuntoError.textContent = 'O assunto é obrigatório e deve ter no máximo 50 caracteres.';
        formValido = false;
    }

    if (!mensagem || mensagem.length > 300) {
        mensagemError.textContent = 'A mensagem é obrigatória e deve ter no máximo 300 caracteres.';
        formValido = false;
    }

    if (formValido) {
        console.log('Formulário válido. Enviando...');
    } else {
        const botaoEnviar = document.querySelector('.formcontato__botao');
        botaoEnviar.disabled = true;
    }
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function atualizarEstadoBotao() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const botaoEnviar = document.querySelector('.formcontato__botao');

    if (nome && email && assunto && mensagem) {
        botaoEnviar.disabled = false;
    } else {
        botaoEnviar.disabled = true;
    }
}

document.getElementById('nome').addEventListener('input', atualizarEstadoBotao);
document.getElementById('email').addEventListener('input', atualizarEstadoBotao);
document.getElementById('assunto').addEventListener('input', atualizarEstadoBotao);
document.getElementById('mensagem').addEventListener('input', atualizarEstadoBotao);

document.querySelector('.formcontato__form').addEventListener('submit', validarForm);