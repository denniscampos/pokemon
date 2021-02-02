document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {

    const pokemonOne = document.querySelector('#pokemon_one').value.toLowerCase()
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemonOne 

    fetch(url) 
        .then(res => res.json())
        .then(data => {
            console.log(data.name)

            // Picture of Pokemon - Front Sprite
            document.querySelector("img").src = data.sprites.front_default

            // Pokemon Base Experience Points
            document.querySelector('#baseExperience').innerText = data.base_experience 

            // Pokemon Ability #1
            document.querySelector('#abilityOne').innerText = data.abilities[0].ability.name.toUpperCase()

            // Pokemon Ability #2
            document.querySelector('#abilityTwo').innerText = data.abilities[1].ability.name.toUpperCase()


        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}