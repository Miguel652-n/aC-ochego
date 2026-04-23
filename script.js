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
    // cachorros
    criarPet("Ben", "cachorro", "macho", "Idoso", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Ben_I.png"),
    criarPet("Babi", "cachorro", "femea", "Filhote", "MG", "Cão Viver", "São Paulo", "Assets/Doguinhos/Femeas/Babi_F.png"),
    criarPet("Beto", "cachorro", "macho", "Idoso", "MG", "Amigo Fiel", "Niterói", "Assets/Doguinhos/Machos/Beto_I.png"),
    criarPet("Bebel", "cachorro", "femea", "Adulto", "MG", "Amigo Fiel", "Niterói", "Assets/Doguinhos/Femeas/Bebel_A.png"),
    criarPet("Bob", "cachorro", "macho", "Adulto", "MG", "Cão Viver", "São Paulo", "Assets/Doguinhos/Machos/Bob_A.png"),
    criarPet("Bella", "cachorro", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Bella_A.png"),
    criarPet("Caos", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Caos_A.png"),
    criarPet("Collie", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Collie_F.png"),
    criarPet("Chocolate", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Chocolate_A.png"),
    criarPet("Jade", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Jade_F.png"),
    criarPet("Cirius", "cachorro", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Cirius_F.png"),
    criarPet("Lindinha", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Lindinha_F.png"),
    criarPet("Dante", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Dante_A.png"),
    criarPet("Luna", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Luna_F.png"),
    criarPet("Fred", "cachorro", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Fred_F.png"),
    criarPet("Malu", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Malu_F.png"),
    criarPet("Hamlet", "cachorro", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Hamelet_F.png"),
    criarPet("Mel", "cachorro", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Mel_A.png"),
    criarPet("Kratus", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Kratus_A.png"),
    criarPet("Panqueca", "cachorro", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Panqueca_A.png"),
    criarPet("Nacho", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Nacho_A.png"),
    criarPet("Tamires", "cachorro", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Tamires_A.png"),
    criarPet("Thor", "cachorro", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Thor_A.png"),
    criarPet("Zoe", "cachorro", "femea", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Zoe_F.png"),
    criarPet("Zeus", "cachorro", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Machos/Zeus_F.png"),
    // trocaR a cor da estrelinha da pacoca
    criarPet("Paçoca", "cachorro", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Doguinhos/Femeas/Paçoca_A.png"),
    // gatos  
    criarPet("Cookie", "gato", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Cookie_F.png"),
    criarPet("Café", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Cafe_A.png"),
    criarPet("Coxinha", "gato", "macho", "Idoso", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Coxinha_I.png"),
    criarPet("Faisca", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Faisca_A.png"),
    criarPet("Felix", "gato", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Felix_F.png"),
    criarPet("Flora", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Flora_A.png"),
    criarPet("Garfield", "gato", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Garfield_A.png"),
    criarPet("Kitty", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Kitty_A.png"),
    criarPet("Gatito", "gato", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Gatito_F.png"),
    criarPet("Luz", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Luz_A.png"),
    criarPet("Mingau", "gato", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Mingau_F.png"),
    criarPet("Maya", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Maya_A.png"),
    criarPet("Nico", "gato", "macho", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Nico_A.png"),
    criarPet("Moon", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Moon_A.png"),
    criarPet("Ozzy", "gato", "macho", "Filhote", "MG", "Apa", "Uberlândia", "Assets/Miaus/Machos/Ozzy_F.png"),
    criarPet("Pixie", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Pixie_A.png"),
    criarPet("Zoe", "gato", "femea", "Adulto", "MG", "Apa", "Uberlândia", "Assets/Miaus/Femeas/Zoe_A.png"),
    
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
    const regiao = document.querySelector(".estados").value;

    const idades = Array.from(idadesSelecionadas).map(i => i.value);

    listaFiltrada = petsData.filter(pet => {
        if (especie && pet.especie !== especie) return false;
        if (genero && pet.genero !== genero) return false;
        if (idades.length > 0 && !idades.map(i => i.toLowerCase()).includes(pet.idade.toLowerCase())) return false;
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