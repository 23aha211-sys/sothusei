const imageFiles3 = ['../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png',
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png'
                    ];

const reelLeft3 = document.getElementById('reel_picture_left3');
let currentIndexL3 = 0;
let intervalIdL3 = null;
function reelLeft3_move(){
    currentIndexL3 = (currentIndexL3 + 1) % imageFiles3.length;

    reelLeft3.src = imageFiles3[currentIndexL3];
}

function startReelLeft3(){
    if(!intervalIdL3){
        intervalIdL3 = setInterval(() =>reelLeft3_move(),100);
    }
}

function stopReelLeft3(){
    if(intervalIdL3){
        clearInterval(intervalIdL3);
        intervalIdL3 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[0].classList.contains('clicked')){
            startReelLeft3();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('left_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelLeft3());
})









