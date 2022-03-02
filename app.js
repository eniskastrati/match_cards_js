const cardArray = [
    {
        name: 'fries',
        img: 'assets/images/fries.png',
    },
    {
        name: 'chesseburger',
        img: 'assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'assets/images/hotdog.png',
    },
    {
        name: 'ice-crean',
        img: 'assets/images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/images/pizza.png',
    },
    {
        name: 'fries',
        img: 'assets/images/fries.png',
    },
    {
        name: 'chesseburger',
        img: 'assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'assets/images/hotdog.png',
    },
    {
        name: 'ice-crean',
        img: 'assets/images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/images/pizza.png',
    }
];
//here we shuffle the array randomly
cardArray.sort(() => 0.5 - Math.random());

//Getting the Grid from index.html
const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];

//functions
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card)
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
};

//calling the functions
createBoard()