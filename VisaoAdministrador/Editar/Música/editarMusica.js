document.addEventListener('DOMContentLoaded', () => {
    const botaoOcultarSenha = document.getElementById('botaoOcultarSenha');
    const inputOutroArtista = document.getElementById('senha-artista');
    const iconeSenha = document.getElementById('iconeSenha');

    if (botaoOcultarSenha && inputOutroArtista && iconeSenha) {
        botaoOcultarSenha.addEventListener('click', () => {
            const tipoAtual = inputOutroArtista.getAttribute('type');

            if (tipoAtual === 'password') {
                inputOutroArtista.setAttribute('type', 'text');
                iconeSenha.classList.remove('fa-eye-slash');
                iconeSenha.classList.add('fa-eye');
            } else {
                inputOutroArtista.setAttribute('type', 'password');
                iconeSenha.classList.remove('fa-eye');
                iconeSenha.classList.add('fa-eye-slash');
            }
        });
    }

    
    const formCadastro = document.querySelector('.formulario-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault(); 

      
            const nomeMusica = document.getElementById('nome-artista').value.trim();
            const letraMusica = document.getElementById('email-artista').value.trim();
            const artistaPrincipal = document.getElementById('codigo-artista').value.trim();
            const outroArtista = document.getElementById('senha-artista').value.trim();
            const infoAdicional = document.getElementById('informacao-adicional').value.trim();
            const aceitouTermos = document.getElementById('caixa-termos').checked;

         
            if (!aceitouTermos) {
                alert('Você precisa aceitar os Termos de Uso e Política de Privacidade para salvar as alterações.');
                return;
            }

            
            const dadosMusicaAtualizados = {
                nomeMusica: nomeMusica,
                letra: letraMusica,
                artistaPrincipal: artistaPrincipal,
                artistaSecundario: outroArtista,
                informacaoAdicional: infoAdicional
            };

            console.log('Dados da música para envio:', dadosMusicaAtualizados);

           
            alert('Alterações da música salvas com sucesso!');

        });
    }
});