const cardArray = [
    {
        name: 'fries',
        img: 'assets/images/fires.png',
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
        img: 'assets/images/fires.png',
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

//functions
const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {

    }
}