const types = document.getElementById('types');

const allPokemons = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const getPokemonData = async (pokemonName) => {
  try {
    let url;
    if (!isNaN(pokemonName)) { // Check if input is a number (ID)
      url = `${allPokemons}/${pokemonName}`;
    } else { // Assume input is a string (name)
      url = `${allPokemons}/${pokemonName.toLowerCase()}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const showPokemon = async () => {
  const input = document.getElementById('search-input');
  
  const pokemonName = input.value;
  const pokemonData = await getPokemonData(pokemonName);
  if (pokemonData) {
    const { types } = pokemonData;

    const typesElement = document.getElementById('types');
    typesElement.innerHTML = ''; // Clear previous content
    types.forEach(type => {
      const typeElement = document.createElement('p');
      typeElement.textContent = type.type.name.toUpperCase();
      typesElement.appendChild(typeElement);
    });
  }
};





const img = (spriteURL) => { 
    
    const spriteImg = document.createElement("img");
    spriteImg.id = "sprite";
    spriteImg.src = spriteURL;
    document.body.appendChild(spriteImg);
}

const num_id = () => { 
    // img('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png')
    
    document.getElementById("image").innerHTML = "<img id='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'>"
    document.getElementById("pokemon-name").innerText = "GENGAR";
    document.getElementById("pokemon-id").innerText = "94";
    document.getElementById("weight").innerText = "405";
    document.getElementById("height").innerText = "15";
    document.getElementById("hp").innerText = "60";
    document.getElementById("attack").innerText = "65";
    document.getElementById("defense").innerText = "60";
    document.getElementById("special-attack").innerText = "130";
    document.getElementById("special-defense").innerText = "75";
    showPokemon()
    document.getElementById("speed").innerText = "110";
   
}


const pikachu = () =>{ 
    document.getElementById("pokemon-name").innerText = "PIKACHU" 
    document.getElementById("pokemon-id").innerText = "#25"
    document.getElementById("weight").innerText = "Weight: 60"
    document.getElementById("height").innerText = "Height: 4"
    document.getElementById("hp").innerText = "35"
    document.getElementById("attack").innerText = "55"
    document.getElementById("defense").innerText = "40"
    document.getElementById("special-attack").innerText = "50"
    document.getElementById("special-defense").innerText = "50"
    document.getElementById("speed").innerText = "90"
    showPokemon()
    img("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
}
const search = () => { 
    var val = document.getElementById("search-input").value ;
    
    (val == "")
    ? alert("input something u lil bitch ")
    :(val == "Red") 
    ?alert("Pokémon not found")
    : (val == "Pikachu") 
    ? pikachu()
    : (val == "94")
    ? num_id()
    : alert("theres nothing to be done here")
}