const pokemonList = [
    { name: "Pikachu", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { name: "Bulbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "Charmander", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
];

const listDiv = document.getElementById('pokemon-list');
pokemonList.forEach(pokemon => {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.innerHTML = `<img src="${pokemon.img}">
                      <h3>${pokemon.name}</h3>`;
    listDiv.appendChild(card);
});
