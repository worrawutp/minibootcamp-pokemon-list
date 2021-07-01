import pokemonCollection from './pokemons.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function(){
  const PACK = 20
  const cards = document.getElementById('cards')
  const pokemons = pokemonCollection.slice(0, PACK)

  pokemons.forEach(pokemon => {
    let cardDOM = buildCardDOM(pokemon)
    cards.insertAdjacentHTML('beforeend', cardDOM) 
  })
})

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

