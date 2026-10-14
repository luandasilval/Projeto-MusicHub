document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.formulario-cadastro');
    const inputNome = document.getElementById('nome-musica');
    const inputLetra = document.getElementById('letra-musica');
    const inputArtista = document.getElementById('associar-artista');
    const inputCodigo = document.getElementById('codigo-musica');
    const inputInfoAdicional = document.getElementById('informacao-adicional');
    const inputTermos = document.getElementById('caixa-termos');


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
            const letra = inputLetra.value.trim();
            const artista = inputArtista.value.trim();
            const codigo = inputCodigo.value.trim();
            const infoAdicional = inputInfoAdicional ? inputInfoAdicional.value.trim() : '';
            const aceitouTermos = inputTermos.checked;

            if (!nome) {
                marcarErro(inputNome, 'Por favor, informe o nome da música.');
                return;
            }

            if (!letra) {
                marcarErro(inputLetra, 'Por favor, insira a letra da música.');
                return;
            }

            if (!artista) {
                marcarErro(inputArtista, 'Por favor, informe o artista associado à música.');
                return;
            }

            if (!codigo) {
                marcarErro(inputCodigo, 'Por favor, informe o código da música.');
                return;
            }

            if (!aceitouTermos) {
                alert('Você precisa aceitar os Termos de uso e Política de privacidade para continuar.');
                return;
            }


            const dadosMusica = {
                nome: nome,
                letra: letra,
                artista: artista,
                codigo: codigo,
                informacaoAdicional: infoAdicional,
                termosAceitos: aceitouTermos
            };

            console.log('Dados da Música Prontos para Envio:', dadosMusica);


            alert(`Música "${nome}" cadastrada com sucesso!`);
            form.reset();
        });
    }
});