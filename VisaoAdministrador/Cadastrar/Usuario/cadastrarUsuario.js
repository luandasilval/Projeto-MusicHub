document.addEventListener('DOMContentLoaded', () => {
    // olhinho senha
    const botoesOcultarSenha = document.querySelectorAll('.botao-ocultar-senha');

    botoesOcultarSenha.forEach(botao => {
        botao.addEventListener('click', () => {
            const inputSenha = botao.parentElement.querySelector('input');
            const icone = botao.querySelector('i');

            if (inputSenha.type === 'password') {
                inputSenha.type = 'text';
                icone.classList.remove('fa-eye-slash');
                icone.classList.add('fa-eye');
            } else {
                inputSenha.type = 'password';
                icone.classList.remove('fa-eye');
                icone.classList.add('fa-eye-slash');
            }
        });
    });

    //  verificando o formulario
    const formulario = document.querySelector('.formulario-cadastro');
    const inputNome = document.getElementById('nome-artista');
    const inputEmail = document.getElementById('email-artista');
    const inputSenha = document.getElementById('senha-usuario');
    const inputConfirmarSenha = document.getElementById('confirmar-senha-usuario');
    const caixaTermos = document.getElementById('caixa-termos');

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // mensagem de erro (la do css)
    function mostrarErro(input, mensagem) {
        const caixinhaTexto = input.closest('.input-texto');
        let mensagemErro = caixinhaTexto.querySelector('.mensagem-erro');

        if (!mensagemErro) {
            mensagemErro = document.createElement('span');
            mensagemErro.className = 'mensagem-erro'; 
            caixinhaTexto.appendChild(mensagemErro);
        }

        mensagemErro.innerText = mensagem;
        input.classList.add('campo-erro'); // 
    }

    //* limpa erro
    function limparErro(input) {
        const caixinhaTexto = input.closest('.input-texto');
        const mensagemErro = caixinhaTexto.querySelector('.mensagem-erro');
        
        if (mensagemErro) {
            mensagemErro.remove();
        }
        input.classList.remove('campo-erro'); //* tira a borda de erro
    }

    //*limpa os erros enquanto estiver digitando
    [inputNome, inputEmail, inputSenha, inputConfirmarSenha].forEach(input => {
        input.addEventListener('input', () => limparErro(input));
    });

    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let ehValido = true;

        if (inputNome.value.trim() === '') {
            mostrarErro(inputNome, 'Por favor, informe o nome do usuário.');
            ehValido = false;
        }

        if (inputEmail.value.trim() === '') {
            mostrarErro(inputEmail, 'Por favor, informe o e-mail.');
            ehValido = false;
        } else if (!validarEmail(inputEmail.value.trim())) {
            mostrarErro(inputEmail, 'Digite um e-mail válido.');
            ehValido = false;
        }

        if (inputSenha.value === '') {
            mostrarErro(inputSenha, 'Por favor, crie uma senha.');
            ehValido = false;
        } else if (inputSenha.value.length < 6) {
            mostrarErro(inputSenha, 'A senha deve ter pelo menos 6 caracteres.');
            ehValido = false;
        }

        if (inputConfirmarSenha.value === '') {
            mostrarErro(inputConfirmarSenha, 'Por favor, confirme a senha.');
            ehValido = false;
        } else if (inputSenha.value !== inputConfirmarSenha.value) {
            mostrarErro(inputConfirmarSenha, 'As senhas não coincidem.');
            ehValido = false;
        }

        if (!caixaTermos.checked) {
            alert('Você precisa aceitar os Termos de uso e Política de privacidade para continuar.');
            ehValido = false;
        }

        if (ehValido) {
            alert('Usuário cadastrado com sucesso!');
            formulario.reset();
        }
    });
});