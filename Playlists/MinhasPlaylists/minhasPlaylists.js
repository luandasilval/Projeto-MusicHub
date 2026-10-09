document.addEventListener("DOMContentLoaded", () => {
    const listaPlaylists = document.querySelector(".lista-playlists");
    const botaoAdicionar = document.querySelector(".botao-adicionar");

    /* ===================================================
       1. REMOVER / EXCLUIR PLAYLIST (LIXEIRA)
       =================================================== */
    if (listaPlaylists) {
        listaPlaylists.addEventListener("click", (e) => {
            // Verifica se o clique foi no botão de excluir (ou no ícone da lixeira)
            const botaoExcluir = e.target.closest(".botao-excluir");

            if (botaoExcluir) {
                const itemPlaylist = botaoExcluir.closest(".item-playlist");
                const nomePlaylist = itemPlaylist ? itemPlaylist.querySelector(".nome-playlist").textContent : "esta playlist";

                // Confirmação antes de deletar
                const confirmar = confirm(`Tem certeza que deseja excluir a "${nomePlaylist}"?`);

                if (confirmar && itemPlaylist) {
                    // Animação de saída
                    itemPlaylist.style.transition = "all 0.3s ease";
                    itemPlaylist.style.opacity = "0";
                    itemPlaylist.style.transform = "translateX(30px)";

                    setTimeout(() => {
                        itemPlaylist.remove();
                        verificarListaVazia();
                    }, 300);
                }
            }
        });

        /* ===================================================
           2. NAVEGAÇÃO / CLIQUE NA PLAYLIST
           =================================================== */
        listaPlaylists.addEventListener("click", (e) => {
            const infoPlaylist = e.target.closest(".info-playlist");

            if (infoPlaylist) {
                const nomePlaylist = infoPlaylist.querySelector(".nome-playlist").textContent;
                // Exemplo de redirecionamento ou ação ao clicar na playlist
                alert(`Abrindo "${nomePlaylist}"...`);
                // Para redirecionar para a página da playlist, use:
                // window.location.href = `Playlist.html?nome=${encodeURIComponent(nomePlaylist)}`;
            }
        });
    }

    /* ===================================================
       3. ADICIONAR NOVA PLAYLIST
       =================================================== */
    if (botaoAdicionar && listaPlaylists) {
        botaoAdicionar.addEventListener("click", () => {
            const nomeNovaPlaylist = prompt("Digite o nome da nova playlist:");

            if (nomeNovaPlaylist && nomeNovaPlaylist.trim() !== "") {
                const novoItem = document.createElement("div");
                novoItem.className = "item-playlist";
                novoItem.style.opacity = "0";
                novoItem.style.transform = "translateY(-10px)";
                novoItem.style.transition = "all 0.3s ease";

                novoItem.innerHTML = `
                    <div class="info-playlist">
                        <div class="container-imagem">
                            <img src="../../ImgsPlaylists/ImagemB.png" alt="Capa da Playlist" class="imagem-capa">
                        </div>
                        <span class="nome-playlist">${escapeHtml(nomeNovaPlaylist)}</span>
                    </div>
                    <button class="botao-excluir" title="Excluir playlist">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                `;

                // Remove mensagem de lista vazia caso exista
                const mensagemVazia = document.querySelector(".mensagem-vazia");
                if (mensagemVazia) mensagemVazia.remove();

                // Adiciona no topo da lista
                listaPlaylists.prepend(novoItem);

                // Animação de entrada
                requestAnimationFrame(() => {
                    novoItem.style.opacity = "1";
                    novoItem.style.transform = "translateY(0)";
                });
            }
        });
    }

    /* ===================================================
       FUNÇÕES AUXILIARES
       =================================================== */

    // Exibe mensagem caso todas as playlists sejam excluídas
    function verificarListaVazia() {
        const itens = document.querySelectorAll(".item-playlist");
        if (itens.length === 0 && !document.querySelector(".mensagem-vazia")) {
            const msg = document.createElement("p");
            msg.className = "mensagem-vazia";
            msg.style.textAlign = "center";
            msg.style.padding = "40px 0";
            msg.style.color = "rgba(255, 255, 255, 0.6)";
            msg.style.fontSize = "1.1rem";
            msg.textContent = "Você ainda não tem nenhuma playlist. Clique no botão '+' para criar!";
            listaPlaylists.appendChild(msg);
        }
    }

    // Proteção contra injeção de HTML/Scripts no prompt
    function escapeHtml(string) {
        return String(string).replace(/[&<>"']/g, (s) => {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[s];
        });
    }
});