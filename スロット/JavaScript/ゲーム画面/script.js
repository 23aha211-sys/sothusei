const scoreElement = document.getElementById('score');
let  score = 0;

const coinSound = new Audio('../音声/小判01.mp3');

const intervalId = setInterval(() => {

    score;

    scoreElement.textContent = score;
},100);



function changeNumber(delta){
    if (scoreElement.textContent>=3 ||delta>=0){
        score += delta;
        scoreElement.textContent = score;
        coinSound.currentTime = 0;
        if(delta>=0) coinSound.play();
    }
    
}

document.addEventListener('keydown',e =>{
    switch(e.key){
        case '1'  :
            changeNumber(120);
            break;
        case '2' :
            changeNumber(240);
            break;
        case '3' :
            changeNumber(300);
    } 
});

const volumeLabel = document.getElementById('voiceVolume');

volumeLabel.addEventListener('input',(e) =>{
    const val = e.target.value;
    console.log(val);
    coinSound.volume = val;
})