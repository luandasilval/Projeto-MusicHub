document.addEventListener("DOMContentLoaded", () => {
    const listaPlaylists = document.querySelector(".lista-playlists");
    const botaoAdicionar = document.querySelector(".botao-adicionar");


    if (listaPlaylists) {
        listaPlaylists.addEventListener("click", (e) => {
            // ve se o clique foi no botão da lixeira
            const botaoExcluir = e.target.closest(".botao-excluir");

            if (botaoExcluir) {
                const itemPlaylist = botaoExcluir.closest(".item-playlist");
                const nomePlaylist = itemPlaylist ? itemPlaylist.querySelector(".nome-playlist").textContent : "esta playlist";

                
                const confirmar = confirm(`Tem certeza que deseja excluir a "${nomePlaylist}"?`);

                if (confirmar && itemPlaylist) {
                    // animação 
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

        listaPlaylists.addEventListener("click", (e) => {
            const infoPlaylist = e.target.closest(".info-playlist");

            if (infoPlaylist) {
                const nomePlaylist = infoPlaylist.querySelector(".nome-playlist").textContent;
             
                alert(`Abrindo "${nomePlaylist}"...`);
               
            }
        });
    }

 //adc nova playlist
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

                // tira mensagem de lista vazia  se tiverr
                const mensagemVazia = document.querySelector(".mensagem-vazia");
                if (mensagemVazia) mensagemVazia.remove();

                
                listaPlaylists.prepend(novoItem);

                // Animação 
                requestAnimationFrame(() => {
                    novoItem.style.opacity = "1";
                    novoItem.style.transform = "translateY(0)";
                });
            }
        });
    }

    


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

});