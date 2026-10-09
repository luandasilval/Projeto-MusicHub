document.addEventListener('DOMContentLoaded', () => {
    const listaMusicas = document.querySelector('.lista-musicas');
    const btnAdicionar = document.querySelector('.botao-adicionar');

    // Capa de substituição em SVG (funciona sempre, sem depender de internet ou arquivos locais)
    const capaPadraoSVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect width='100%' height='100%' fill='%234a1380'/><circle cx='30' cy='30' r='12' fill='%23150628'/><path d='M26 22v16l12-8z' fill='%23ffffff'/></svg>";

    // Lista de opções de capas locais
    const opcoesCapas = [
        "../../ImgsPlaylists/ImagemB.png",
        "../../ImgsPlaylists/ImagemC.png",
        "../../ImgsPlaylists/ImagemD.png"
    ];

    // Músicas iniciais
    let musicas = [
        { id: 1, nome: "Tal música 1", imagem: "../../ImgsPlaylists/ImagemB.png" },
        { id: 2, nome: "Tal música 2", imagem: "../../ImgsPlaylists/ImagemC.png" },
        { id: 3, nome: "Tal música 3", imagem: "../../ImgsPlaylists/ImagemD.png" }
    ];

    function obterCapaAleatoria() {
        const indexAleatorio = Math.floor(Math.random() * opcoesCapas.length);
        return opcoesCapas[indexAleatorio];
    }

    function renderizarLista() {
        if (!listaMusicas) return;
        listaMusicas.innerHTML = '';

        if (musicas.length === 0) {
            listaMusicas.innerHTML = `
                <div style="text-align: center; padding: 40px; color: rgba(255, 255, 255, 0.6);">
                    <i class="fa-solid fa-music" style="font-size: 3rem; margin-bottom: 10px;"></i><br>
                    Nenhuma música nesta playlist.
                </div>
            `;
            return;
        }

        musicas.forEach((musica, index) => {
            const itemElemento = document.createElement('div');
            itemElemento.classList.add('item-musica');
            itemElemento.dataset.id = musica.id;

            itemElemento.innerHTML = `
                <div class="info-musica">
                    <div class="caixinha-imagem">
                        <img src="${musica.imagem}" alt="Capa do álbum" class="imagem-capa" onerror="this.onerror=null; this.src='${capaPadraoSVG}';">
                    </div>
                    <span class="nome-musica">${musica.nome}</span>
                </div>
                <div class="acoes-musica">
                    <button class="botao-opcao" title="Mais opções" data-index="${index}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button class="botao-remover" title="Remover música" data-index="${index}">
                        <i class="fa-solid fa-circle-minus"></i>
                    </button>
                </div>
            `;

            listaMusicas.appendChild(itemElemento);
        });

        adicionarEventosBotoes();
    }

    function adicionarEventosBotoes() {
        const botoesRemover = document.querySelectorAll('.botao-remover');
        botoesRemover.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                const nome = musicas[index].nome;

                if (confirm(`Deseja remover "${nome}" da playlist?`)) {
                    musicas.splice(index, 1);
                    renderizarLista();
                }
            });
        });

        const botoesOpcao = document.querySelectorAll('.botao-opcao');
        botoesOpcao.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                const musica = musicas[index];

                const acao = prompt(
                    `Opções para "${musica.nome}":\n1 - Renomear\n2 - Trocar Capa\n3 - Simular Reprodução\n\nDigite o número da opção:`
                );

                if (acao === '1') {
                    const novoNome = prompt("Digite o novo nome da música:", musica.nome);
                    if (novoNome && novoNome.trim() !== '') {
                        musicas[index].nome = novoNome.trim();
                        renderizarLista();
                    }
                } else if (acao === '2') {
                    musicas[index].imagem = obterCapaAleatoria();
                    renderizarLista();
                } else if (acao === '3') {
                    alert(`▶️ Tocando agora: ${musica.nome}`);
                }
            });
        });
    }

    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', () => {
            const nomeNovaMusica = prompt("Digite o nome da nova música:");

            if (nomeNovaMusica && nomeNovaMusica.trim() !== '') {
                const novaMusica = {
                    id: Date.now(),
                    nome: nomeNovaMusica.trim(),
                    imagem: obterCapaAleatoria()
                };

                musicas.push(novaMusica);
                renderizarLista();
            }
        });
    }

    renderizarLista();
});