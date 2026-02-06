const imageFilec = ['../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png'
                    ];

const reelCenter = document.getElementById('reel_picture_center1');
let currentIndexC1 = 0;
let intervalIdC1 = null;
function reelCenter1_move(){
    currentIndexC1 = (currentIndexC1 + 1) % imageFilec.length;

    reelCenter.src = imageFilec[currentIndexC1];
}

function startReelCenter1(){
    if(!intervalIdC1){
        intervalIdC1 = setInterval(() =>reelCenter1_move(),100);
    }
}

function stopReelCenter1(){
    if(intervalIdC1){
        clearInterval(intervalIdC1);
        intervalIdC1 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[1].classList.contains('clicked')){
            startReelCenter1();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('center_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelCenter1());
})









