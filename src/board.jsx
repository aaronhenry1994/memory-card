import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'

function PopulateCards() {
const [numberOfDivs, setNumberOfDivs] = useState([]);

function addCards() {
    const newDivItem = { id: Date.now(), content: `Div ${numberOfDivs.length + 1}` };
  setNumberOfDivs(prevItems => [...prevItems, newDivItem]);

}

return (
<>
<div id='card-grid'>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
    <div class='card'>
        <div class='cardImage'></div>
        <div class='cardText'></div>
    </div>
</div>
</>
)
}

export default PopulateCards