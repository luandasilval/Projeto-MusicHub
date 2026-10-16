document.addEventListener('DOMContentLoaded', () => {
    const botaoOcultarSenha = document.getElementById('botaoOcultarSenha');
    const inputSenha = document.getElementById('senha-artista');
    const iconeSenha = document.getElementById('iconeSenha');

    if (botaoOcultarSenha && inputSenha && iconeSenha) {
        botaoOcultarSenha.addEventListener('click', () => {
          
            const tipoAtual = inputSenha.getAttribute('type');

            if (tipoAtual === 'password') {
                inputSenha.setAttribute('type', 'text');
                // Troca para olho aberto
                iconeSenha.classList.remove('fa-eye-slash');
                iconeSenha.classList.add('fa-eye');
            } else {
                inputSenha.setAttribute('type', 'password');
                // troca para olho fechado
                iconeSenha.classList.remove('fa-eye');
                iconeSenha.classList.add('fa-eye-slash');
            }
        });
    }

    
    const formCadastro = document.querySelector('.formulario-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault(); 

          
            const nomeArtista = document.getElementById('nome-artista').value.trim();
            const emailArtista = document.getElementById('email-artista').value.trim();
            const codigoArtista = document.getElementById('codigo-artista').value.trim();
            const senhaArtista = document.getElementById('senha-artista').value;
            const infoAdicional = document.getElementById('informacao-adicional').value.trim();
            const aceitouTermos = document.getElementById('caixa-termos').checked;

        
            if (!aceitouTermos) {
                alert('Você precisa aceitar os Termos de Uso e Política de Privacidade para continuar.');
                return;
            }

    
            const dadosAtualizados = {
                nome: nomeArtista,
                email: emailArtista,
                musicasPublicadas: codigoArtista,
                senha: senhaArtista,
                informacaoAdicional: infoAdicional
            };

            console.log('Dados prontos para envio:', dadosAtualizados);

    
            alert('Alterações salvas com sucesso!');

          
        });
    }
});