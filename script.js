const dataContainerMercadoLibre = document.getElementById('mercadolibre-list');
const dataContainerPokemon = document.getElementById('pokemon-list');

// Función para crear elementos de lista
function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

// Petición a la API de Mercado Libre
fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
  .then(res => res.json())
  .then(data => {
    data.results.forEach((item, index) => {
      const listItem = createListItem(`${item.title}`);
      dataContainerMercadoLibre.appendChild(listItem);
    });
  })
  .catch(err => console.error(err));

// Petición a la API de Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.json())
  .then(data => {
    const listItem = createListItem(`Name: ${data.name}, Height: ${data.height}, Weight: ${data.weight}`);
    dataContainerPokemon.appendChild(listItem);
  })
  .catch(err => console.error(err));
