function criarPet(nome, especie, genero, idade, regiao, ong, cidade, imagem) {
  return {
    nome,
    especie,
    genero,
    idade,
    regiao,
    ong,
    cidade,
    imagem
  };
}

const petsData = [
  criarPet("Rex", "Cachorro", "macho", "filhote", "MG", "Apa", "Uberlândia", "Assets/testepet.png"),
  criarPet("Rex", "Cachorro", "femea", "adulto", "SP", "Cão Viver", "São Paulo", "Assets/testepet.png"),
  criarPet("Rex", "Cachorro", "macho", "adulto", "MG", "Amigo Fiel", "Niterói", "Assets/testepet.png")
];

let quantidadeVisivel = 6;
let listaFiltrada = [...petsData];

const container = document.querySelector(".adotar");

function renderPets() {
    container.innerHTML = "";

    const visiveis = listaFiltrada.slice(0, quantidadeVisivel);

    visiveis.forEach(pet => {
        container.innerHTML += `
            <article class="adotar-card">
                
                <h3>${pet.ong}</h3>
                <p>${pet.cidade} - ${pet.regiao}</p>

                <div class="img-wrapper">
                    <img src="${pet.imagem}" alt="${pet.nome}">
                </div>

                <p>${pet.nome}</p>
                <p>${pet.especie}</p>

                <button>Adotar</button>
            </article>
        `;
    });

    // esconder botão se acabar
    const botao = document.getElementById("verMais");
    if (quantidadeVisivel >= listaFiltrada.length) {
        botao.style.display = "none";
    } else {
        botao.style.display = "block";
    }
}

function aplicarFiltro() {
    const especie = document.querySelector('input[name="especie"]:checked')?.value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const idadesSelecionadas = document.querySelectorAll('input[name="idade"]:checked');
    const regiao = document.querySelector(".pais").value;

    const idades = Array.from(idadesSelecionadas).map(i => i.value);

    listaFiltrada = petsData.filter(pet => {
        if (especie && pet.especie !== especie) return false;
        if (genero && pet.genero !== genero) return false;
        if (idades.length > 0 && !idades.includes(pet.idade)) return false;
        if (regiao && pet.regiao !== regiao) return false;

        return true;
    });

    quantidadeVisivel = 6;
    renderPets();
}

document.getElementById("verMais").addEventListener("click", () => {
    quantidadeVisivel += 6;
    renderPets();
});

document.querySelector("form").addEventListener("change", aplicarFiltro);

renderPets();