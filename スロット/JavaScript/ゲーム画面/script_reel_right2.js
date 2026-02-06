const imageFilesr2 = ['../画像/仮画像青四角.png',   
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png'
                    ];

const reelRight2 = document.getElementById('reel_picture_right2');
let currentIndexR2 = 0;
let intervalIdR2 = null;
function reelRight2_move(){
    currentIndexR2 = (currentIndexR2 + 1) % imageFilesr2.length;

    reelRight2.src = imageFilesr2[currentIndexR2];
}

function startReelRight2(){
    if(!intervalIdR2){
        intervalIdR2 = setInterval(() =>reelRight2_move(),100);
    }
}

function stopReelRight2(){
    if(intervalIdR2){
        clearInterval(intervalIdR2);
        intervalIdR2 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn?.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[2].classList.contains('clicked')){
            startReelRight2();
        }
        else{
            console.log("だめ");
        }
    });

    const stopBtn = document.getElementById('right_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelRight2());
})







