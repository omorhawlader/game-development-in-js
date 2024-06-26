let playerState = 'idle';

const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

console.log(playerState);

const canvas = document.querySelector('#canva')

const img = new Image()
img.src = 'shadow_dog.png'


const CANVA_WIDTH = canvas.width = 600
const CANVA_HEIGHT = canvas.height = 600
const ctx = canvas.getContext('2d')

const spriteWidth = 575
const spriteHeight  = 523

let staggleFrame = 5

let gameFrame = 0
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

function anime(){
    ctx.clearRect(0,0,CANVA_WIDTH,CANVA_HEIGHT)

    // let position = Math.floor(gameFrame / staggleFrame) % 6
    // every 5 frame get 1++{5times slower} then get 1 to 6

    let position = Math.floor(gameFrame/staggleFrame) % spriteAnimations[playerState].loc.length;

    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;



    ctx.drawImage(img,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    // if(gameFrame % staggleFrame == 0){
    //     if(frameX < 6) frameX++
    //     else frameX = 0
    // }
    

    gameFrame++
    // console.log(gameFrame);
    requestAnimationFrame(anime)
}

anime()