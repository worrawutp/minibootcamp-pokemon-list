import pokemonCollection from './pokemons.json'

import './main.scss'

const PACK = 50

document.addEventListener('DOMContentLoaded', function(){
  const cards = document.getElementById('cards')
  const pokemons = getUniquePokemon()

  pokemons.forEach(pokemon => {
    let cardDOM = buildCardDOM(pokemon)
    cards.insertAdjacentHTML('beforeend', cardDOM) 
  })
})

function getUniquePokemon() {
  let result = []
  for(var i=1; i<=PACK; i++) {
    let pokemonNumbers = pokemonCollection.filter(pokemon => pokemon.id == i)
    let pokemonLowestWeight = pokemonNumbers.reduce((lowest, pokemon) => {
      return (pokemon.weight < lowest.weight) ? pokemon : lowest 
    }, { weight: 10000 })

    result.push(pokemonLowestWeight)
  }
  return result
}

function buildCardDOM(pokemon) {
  let typeString = ''
  pokemon.type.forEach(t => {
    typeString += `<div class="poke-type ${t.toLowerCase()}">${t}</div>`
  })

  return (
    `<div class="card">
      <a href="" class="card-photo">
        <img src="${pokemon.ThumbnailImage}" alt="${pokemon.ThumbnailAltText}" />
      </a>
      <div class="poke-info">
        <div class="poke-number">#${pokemon.number}</div>
        <div class="poke-name">${pokemon.name}</div>
        <div class="poke-types">${typeString}</div>
      </div>
    </div> <!--.card -->`
  )
}

