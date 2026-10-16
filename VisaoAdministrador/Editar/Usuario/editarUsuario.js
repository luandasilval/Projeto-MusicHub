document.addEventListener('DOMContentLoaded', () => {
    const botoesOcultarSenha = document.querySelectorAll('.botao-ocultar-senha');

    botoesOcultarSenha.forEach((botao) => {
        botao.addEventListener('click', () => {

            const container = botao.closest('.caixinha-senha');
            const inputSenha = container.querySelector('input');
            const iconeSenha = botao.querySelector('i');

            if (inputSenha && iconeSenha) {
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
            }
        });
    });


    const formCadastro = document.querySelector('.formulario-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault();


            const nomeUsuario = document.getElementById('nome-artista').value.trim();
            const emailUsuario = document.getElementById('email-artista').value.trim();
            const senhaUsuario = document.getElementById('senha-usuario').value;
            const confirmarSenhaUsuario = document.getElementById('confirmar-senha-usuario').value;
            const infoAdicional = document.getElementById('informacao-adicional').value.trim();
            const aceitouTermos = document.getElementById('caixa-termos').checked;


            if (senhaUsuario !== confirmarSenhaUsuario) {
                alert('As senhas digitadas não coincidem. Por favor, verifique.');
                return;
            }


            if (!aceitouTermos) {
                alert('Você precisa aceitar os Termos de Uso e Política de Privacidade.');
                return;
            }


            const dadosUsuarioAtualizados = {
                nome: nomeUsuario,
                email: emailUsuario,
                senha: senhaUsuario,
                informacaoAdicional: infoAdicional
            };

            console.log('Dados do usuário enviados:', dadosUsuarioAtualizados);


            alert('Dados do usuário atualizados com sucesso!');


        });
    }
});