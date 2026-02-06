const imageFilesr = ['../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png'
                    ];

const reelRight1 = document.getElementById('reel_picture_right1');
let currentIndexR1 = 0;
let intervalIdR1 = null;
function reelRight1_move(){
    currentIndexR1 = (currentIndexR1 + 1) % imageFilesr.length;

    reelRight1.src = imageFilesr[currentIndexR1];
}

function startReelRight1(){
    if(!intervalIdR1){
        intervalIdR1 = setInterval(() =>reelRight1_move(),100);
    }
}

function stopReelRight1(){
    if(intervalIdR1){
        clearInterval(intervalIdR1);
        intervalIdR1 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[2].classList.contains('clicked')){
            startReelRight1();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('right_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelRight1());
})








