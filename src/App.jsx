import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import Memory from './App.jsx'
import './App.css'

function PopulateCards(setParentScore, setParentHigh) {
const [loggedMon, setLoggedMon] = useState([]);
const [score, setScore] = useState(0)
const [highScore, setHighScore] = useState(0)
const [pokemon, setPokemon] = useState([]);
const [randomPokemon, setRandom] = useState([]);

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

useEffect(() => {

    function getRandomPoke() {

    let tempArray = []
    if (pokemon.length > 0) {
    for (let i = 0; i < 12; i++) {
        const randomPoke = pokemon[Math.floor(Math.random() * pokemon.length)];
        tempArray.push({name: randomPoke.name, sprite: randomPoke.sprites.front_default});
    }
    console.log(tempArray)
    return setRandom(tempArray);
}
    
};
getRandomPoke();
}, [pokemon])

function getRandomPoke() {
    let tempArray = [];
    if (pokemon.length > 0) {
        for (let i = 0; i < 12; i++) {
            const randomPoke = pokemon[Math.floor(Math.random() * pokemon.length)];
            tempArray.push({name: randomPoke.name, sprite: randomPoke.sprites.front_default});
        }
        console.log(tempArray)
        return setRandom(tempArray)
    }
}

function cardClick(pokemon) {
    if (loggedMon.includes(pokemon)) {
        setScore(0);
        setHighScore(score);
        setLoggedMon([]);
        getRandomPoke();
    }
    else {
        setLoggedMon([
        ...loggedMon, pokemon
    ])
    setScore(currentScore => currentScore + 1);
    if (highScore < score) {
        setHighScore(score);
    }
    getRandomPoke();
    }
    console.log(pokemon)
}

console.log(setParentScore)
console.log(loggedMon);
console.log(pokemon)
console.log(randomPokemon)

return (
<>
<div id='header'>
    <div id='headerText'>
        <h2>Pokemon Memory Game</h2>
    </div>
    <div id='scoreBox'>
        <div id='currentScore'>Current: {score}</div>
        <div id='bestScore'>Best: {highScore}</div>
    </div>
</div>
<div id='card-grid'>
    <div class='card' onClick={() => {cardClick(randomPokemon[0]?.name); getRandomPoke();}}>
        <div id='cardTextZero' class='cardText'>{randomPokemon[0]?.name}</div>
        <img id='cardZeroImg' src={randomPokemon[0]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[1]?.name)}>
        <div id='cardTextOne' class='cardText'>{randomPokemon[1]?.name}</div>
        <img id='cardOneImg' src={randomPokemon[1]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[2]?.name)}>
        <div id='cardTextTwo' class='cardText'>{randomPokemon[2]?.name}</div>
        <img id='cardTwoImg' src={randomPokemon[2]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[3]?.name)}>
        <div id='cardTextThree' class='cardText'>{randomPokemon[3]?.name}</div>
        <img id='cardThreeImg' src={randomPokemon[3]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[4]?.name)}>
        <div id='cardTextFour' class='cardText'>{randomPokemon[4]?.name}</div>
        <img id='cardFourImg' src={randomPokemon[4]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[5]?.name)}>
        <div id='cardTextFive' class='cardText'>{randomPokemon[5]?.name}</div>
        <img id='cardFiveImg' src={randomPokemon[5]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[6]?.name)}>
        <div id='cardTextSix' class='cardText'>{randomPokemon[6]?.name}</div>
        <img id='cardSixImg' src={randomPokemon[6]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[7]?.name)}>
        <div id='cardTextSeven' class='cardText'>{randomPokemon[7]?.name}</div>
        <img id='cardSevenImg' src={randomPokemon[7]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[8]?.name)}>
        <div id='cardTextEight' class='cardText'>{randomPokemon[8]?.name}</div>
        <img id='cardEightImg' src={randomPokemon[8]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[9]?.name)}>
        <div id='cardTextNine' class='cardText'>{randomPokemon[9]?.name}</div>
        <img id='cardNineImg' src={randomPokemon[9]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[10]?.name)}>
        <div id='cardTextTen' class='cardText'>{randomPokemon[10]?.name}</div>
        <img id='cardTenImg' src={randomPokemon[10]?.sprite} alt="" />
    </div>
    <div class='card' onClick={() => cardClick(randomPokemon[11]?.name)}>
        <div id='cardTextEleven' class='cardText'>{randomPokemon[11]?.name}</div>
        <img id='cardElevenImg' src={randomPokemon[11]?.sprite} alt="" />
    </div>
</div>
</>
)
}

export default PopulateCards