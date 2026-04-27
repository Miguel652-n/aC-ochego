function criarOngs (nome, cidade, regiao, imagem, pix) {
    return {
        nome,
        cidade,
        regiao,
        imagem,
        pix
    }
}

const ongsData = [
    // MG
    criarOngs("Amparo Pet", "Uberlândia", "MG", "/Assets/assetsongs/ampetMG.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "MG", "/Assets/assetsongs/apaMG.jpg", "13966133660"),
    criarOngs("Bichos Gerais", "Uberlândia", "MG", "/Assets/assetsongs/bichosgeraisMG.jpg", "13966133660"),
    criarOngs("SOS animal", "Uberlândia", "MG", "/Assets/assetsongs/SOSanimal.png", "13966133660"),
    // RJ
    criarOngs("AçãoAnimal", "Uberlândia", "RJ", "/Assets/assetsongs/acaoanimalRJ.png", "13966133660"),
    criarOngs("Adote um Bichinho", "Uberlândia", "RJ", "/Assets/assetsongs/adotebichRJ.jpg", "13966133660"),
    criarOngs("Cãodominio", "Uberlândia", "RJ", "/Assets/assetsongs/caodominioRJ.png", "13966133660"),
    criarOngs("Distrito Animal", "Uberlândia", "RJ", "/Assets/assetsongs/distanimalRJ.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "RJ", "/Assets/assetsongs/fazendamodeloRJ.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "RJ", "/Assets/assetsongs/paraisofucinRJ.png", "13966133660"),
    // SP
    criarOngs("Apa", "Uberlândia", "SP", "/Assets/assetsongs/alianimaSP.png", "13966133660"),
    criarOngs("Apa", "Uberlândia", "SP", "/Assets/assetsongs/amoranimalSP.png", "13966133660"),
    criarOngs("Apa", "Uberlândia", "SP", "Assets/assetsongs/apelosepatasSP.webp", "13966133660"),
    criarOngs("Apa", "Uberlândia", "SP", "/Assets/assetsongs/caosemdonoSP.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "SP", "/Assets/assetsongs/ongsosSP.jpg", "13966133660"),
    // GO
    criarOngs("Apa", "Uberlândia", "GO", "/Assets/assetsongs/anjdaruaGO.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "GO", "/Assets/assetsongs/lardosanimGO.png", "13966133660"),
    criarOngs("Apa", "Uberlândia", "GO", "/Assets/assetsongs/proanimaGO.jpg", "13966133660"),
    criarOngs("Apa", "Uberlândia", "GO", "/Assets/assetsongs/sosanimalGO.png", "13966133660")
]

let quantidadeVisivel = 6;
let listaFiltrada = [...ongsData];

const container = document.querySelector(".ONGs");

function renderOngs() {
    container.innerHTML = "";

    const visiveis = listaFiltrada.slice(0, quantidadeVisivel);

    visiveis.forEach(ong => {
        container.innerHTML += `
            <article class="ONGs-card">

                <h3>${ong.nome}</h3>
                <p>${ong.cidade}-${ong.regiao}</p>

                <div class="img-wrapper">
                    <img src="${ong.imagem}" alt="${ong.nome}">
                </div>

                <div class="pix-box">
                    <p>Chave PIX:</p>
                    <span>${ong.pix}</span>
                </div>

            </article>
        `;
    });

    const botao = document.getElementById("verMais");
    if (quantidadeVisivel >= listaFiltrada.length) {
        botao.style.display = "none";
    } else {
        botao.style.display = "block";
    }
}

function aplicarFiltroOng() {
    const select = document.getElementById("estados");
    const valor = select.value;

    listaFiltrada = ongsData.filter(ong => {
        if (!valor) return true;
        return ong.regiao === valor;
    });

    quantidadeVisivel = 6;
    renderOngs();
}

document.getElementById("verMais").addEventListener("click", () => {
    quantidadeVisivel += 6;
    renderOngs();
});

document.getElementById("estados").addEventListener("change", aplicarFiltroOng);

renderOngs();