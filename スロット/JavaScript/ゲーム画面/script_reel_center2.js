const imageFilesc2 = ['../画像/仮画像青四角.png',   
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png',
                    '../画像/仮画像黄三角.png'
                    ];

const reelCenter2 = document.getElementById('reel_picture_center2');
let currentIndexC2 = 0;
let intervalIdC2 = null;
function reelCenter2_move(){
    currentIndexC2 = (currentIndexC2 + 1) % imageFilesc2.length;

    reelCenter2.src = imageFilesc2[currentIndexC2];
}


function startReelCenter2(){
    if(!intervalIdC2){
        intervalIdC2 = setInterval(() =>reelCenter2_move(),100);
    }
}

function stopReelCenter2(){
    if(intervalIdC2){
        clearInterval(intervalIdC2);
        intervalIdC2 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[1].classList.contains('clicked')){
            startReelCenter2();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('center_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelCenter2());
})







