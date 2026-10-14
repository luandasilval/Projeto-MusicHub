document.addEventListener('DOMContentLoaded', () => {
  
    const form = document.querySelector('.formulario-cadastro');
    const inputNome = document.getElementById('nome-artista');
    const inputEmail = document.getElementById('email-artista');
    const inputCodigo = document.getElementById('codigo-artista');
    const inputSenha = document.getElementById('senha-artista');
    const inputTermos = document.getElementById('caixa-termos');
    const btnOcultarSenha = document.getElementById('botaoOcultarSenha');
    const iconeSenha = document.getElementById('iconeSenha');


    if (btnOcultarSenha && inputSenha && iconeSenha) {
        btnOcultarSenha.addEventListener('click', () => {
            const tipoAtual = inputSenha.getAttribute('type');
            
            if (tipoAtual === 'password') {
                inputSenha.setAttribute('type', 'text');
                iconeSenha.classList.remove('fa-eye-slash');
                iconeSenha.classList.add('fa-eye');
            } else {
                inputSenha.setAttribute('type', 'password');
                iconeSenha.classList.remove('fa-eye');
                iconeSenha.classList.add('fa-eye-slash');
            }
        });
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function marcarErro(input, mensagem) {
        input.classList.add('campo-erro');
        input.focus();
        alert(mensagem);
    }

    function limparErros() {
        const inputs = Array.from(document.querySelectorAll('.caixa-texto'));
        inputs.forEach(input => {
            input.classList.remove('campo-erro');
        });
    }

    const inputsTexto = document.querySelectorAll('.caixa-texto');
    inputsTexto.forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('campo-erro')) {
                input.classList.remove('campo-erro');
            }
        });
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            limparErros();

            const nome = inputNome.value.trim();
            const email = inputEmail.value.trim();
            const codigo = inputCodigo.value.trim();
            const senha = inputSenha.value;
            const infoAdicional = document.getElementById('informacao-adicional').value.trim();
            const aceitouTermos = inputTermos.checked;

            // validações
            if (!nome) {
                marcarErro(inputNome, 'Por favor, informe o nome do artista.');
                return;
            }

            if (!email) {
                marcarErro(inputEmail, 'Por favor, informe o e-mail.');
                return;
            } else if (!validarEmail(email)) {
                marcarErro(inputEmail, 'Por favor, insira um e-mail válido.');
                return;
            }

            if (!codigo) {
                marcarErro(inputCodigo, 'Por favor, informe o código do artista.');
                return;
            }

            if (!senha) {
                marcarErro(inputSenha, 'Por favor, crie uma senha para o artista.');
                return;
            } else if (senha.length < 6) {
                marcarErro(inputSenha, 'A senha deve conter no mínimo 6 caracteres.');
                return;
            }

            if (!aceitouTermos) {
                alert('Você precisa aceitar os Termos de uso e Política de privacidade para continuar.');
                return;
            }

            const dadosArtista = {
                nome,
                email,
                codigo,
                senha,
                informacaoAdicional: infoAdicional,
                termosAceitos: aceitouTermos
            };

            console.log('Dados do Artista:', dadosArtista);
            alert(`Artista "${nome}" cadastrado com sucesso!`);

            form.reset();
            
            // Restaura o campo de senha para oculta
            if (inputSenha.getAttribute('type') === 'text') {
                inputSenha.setAttribute('type', 'password');
                iconeSenha.classList.remove('fa-eye');
                iconeSenha.classList.add('fa-eye-slash');
            }
        });
    }
});