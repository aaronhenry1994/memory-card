import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'

function PopulateCards() {
const [pokemon, setPokemon] = useState([]);

const url = "https://pokeapi.co/api/v2/pokemon";
const ditto = '/ditto';
const snubbull = '/snubbull';
const mew = '/mew';
const jigglypuff = '/jigglypuff'
const clefairy = '/clefairy';
const slowpoke = '/slowpoke';
const lickitung = '/lickitung';

let pullDitto = url + ditto;
let pullSnubbull = url + snubbull;
let pullMew = url + mew;
let pullJigglypuff = url + jigglypuff;
let pullClefairy = url + clefairy;
let pullSlowpoke = url + slowpoke;
let pullLickitung = url + lickitung;

const urlArray = [pullDitto, pullSnubbull, pullMew, pullJigglypuff, pullClefairy, pullSlowpoke, pullLickitung];

useEffect(() => {

    function pullPokes() {
    Promise.all(urlArray.map(u => fetch(u).then(response =>response.json())))
    .then(data => { console.log(data), setPokemon(data)})
}
pullPokes()
}, [])

function getRandomPoke() {

    const randomPoke = pokemon[Math.floor(Math.random() * pokemon.length)];

    if (pokemon.length > 0) {
    console.log(randomPoke);
    return randomPoke.name
}
}

const randomPokeName = getRandomPoke();
const randomPoke2 = getRandomPoke();
console.log(randomPokeName)
console.log(randomPoke2);
console.log(pokemon);

return (
<>
<div id='card-grid'>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
    <div class='card'>
        <div class='cardText'>{getRandomPoke()}</div>
        <div class='cardImage'></div>
    </div>
</div>
</>
)
}

export default PopulateCards