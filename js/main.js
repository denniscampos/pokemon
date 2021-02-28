document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {

    const pokemonOne = document.querySelector('#pokemon_one').value.toLowerCase()
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemonOne 

    fetch(url) 
        .then(res => res.json())
        .then(data => {
            console.log(data.name)

            // Picture of Pokemon - Front Sprite
            document.querySelector(".front_image").src = data.sprites.front_default
            document.querySelector(".back_image").src = data.sprites.back_default
            

            // Pokemon height & weight
            document.querySelector('#pokeHeight').innerText = data.height
            document.querySelector('#pokeWeight').innerText = data.weight
            
            // Pokemon Base Experience Points
            document.querySelector('#baseExperience').innerText = data.base_experience 

            // Pokemon Ability #1
            document.querySelector('#abilityOne').innerText = data.abilities[0].ability.name.toUpperCase()

            // Pokemon Ability #2
            document.querySelector('#abilityTwo').innerText = data.abilities[1].ability.name.toUpperCase()

            // Pokemon official artwork
            document.querySelector('.official_artwork').src = data.sprites.other['official-artwork'].front_default

            
            console.log(data.sprites.other['official-artwork'].front_default)


        })
        .catch(err => {
            console.log(`error ${err}`)
            alert('Try again, pokemon not found :(')
        })
}
