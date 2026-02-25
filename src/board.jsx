import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'

function GenerateBoard() {

const divNumber = 12;

const board = document.getElementById('board');

for (let i = 1; i <= divNumber; i++) {

    if (board) {
        const card = document.createElement('div');
        card.classList.add('card')
        card.id = 'card-${i}';

        const cardImage = document.createElement('div')
        cardImage.classList.add('cardImage')
        cardImage.id = 'cardImage-${i}';

        board.appendChild(card)
        card.appendChild(cardImage);
    }
}



return (
<>
<div id='board'></div>
</>
)
}

export default GenerateBoard