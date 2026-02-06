const imageFiles = ['../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png'
                    ];

const reelLeft1 = document.getElementById('reel_picture_left1');
let currentIndexL1 = 0;
let intervalIdL1 = null;
function reelLeft1_move(){
    currentIndexL1 = (currentIndexL1 + 1) % imageFiles.length;

    reelLeft1.src = imageFiles[currentIndexL1];
}

function startReelLeft1(){
    if(!intervalIdL1){
        intervalIdL1 = setInterval(() =>reelLeft1_move(),100);
    }
}

function stopReelLeft1(){
    if(intervalIdL1){
        clearInterval(intervalIdL1);
        intervalIdL1 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[0].classList.contains('clicked')){
            startReelLeft1();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('left_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelLeft1());
})









