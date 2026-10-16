document.addEventListener('DOMContentLoaded', () => {

    const campoBusca = document.querySelector('.campo-busca');
    const linhasUsuarios = document.querySelectorAll('.linha-usuario');
    const botoesInativar = document.querySelectorAll('.botao-inativar');
    const botoesEditar = document.querySelectorAll('.botao-editar');


    if (campoBusca) {
        campoBusca.addEventListener('input', () => {
            const termoBusca = campoBusca.value.toLowerCase().trim();

            linhasUsuarios.forEach(linha => {
                const nomeUsuario = linha.querySelector('.nome-usuario')?.textContent.toLowerCase() || '';


                if (nomeUsuario.includes(termoBusca)) {
                    linha.classList.remove('escondido');
                } else {
                    linha.classList.add('escondido');
                }
            });
        });
    }

    botoesEditar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const linhaAtual = e.target.closest('.linha-usuario');
            const nomeArtista = linhaAtual.querySelector('.nome-usuario')?.textContent || '';
        });
    });
});