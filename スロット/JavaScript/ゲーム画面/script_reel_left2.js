const imageFiles2 = ['../画像/仮画像青四角.png',   
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png'
                    ];

const reelLeft2 = document.getElementById('reel_picture_left2');
let currentIndexL2 = 0;
let intervalIdL2 = null;
function reelLeft2_move(){
    currentIndexL2 = (currentIndexL2 + 1) % imageFiles2.length;

    reelLeft2.src = imageFiles2[currentIndexL2];
}

function startReelLeft2(){
    if(!intervalIdL2){
        intervalIdL2 = setInterval(() =>reelLeft2_move(),100);
    }
}

function stopReelLeft2(){
    if(intervalIdL2){
        clearInterval(intervalIdL2);
        intervalIdL2 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[0].classList.contains('clicked')){
            startReelLeft2();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('left_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelLeft2());
})









