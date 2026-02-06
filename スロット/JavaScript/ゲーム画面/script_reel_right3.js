const imageFilesr3 = ['../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png',
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png'
                    ];

const reelRight3 = document.getElementById('reel_picture_right3');
let currentIndexR3 = 0;
let intervalIdR3 = null;
function reelRight3_move(){
    currentIndexR3 = (currentIndexR3 + 1) % imageFilesr3.length;

    reelRight3.src = imageFilesr3[currentIndexR3];
}

function startReelRight3(){
    if(!intervalIdR3){
        
        intervalIdR3 = setInterval(() =>reelRight3_move(),100);
        
        
    }
}

function stopReelRight3(){
    if(intervalIdR3){
        clearInterval(intervalIdR3);
        intervalIdR3 = null;
    }
}



document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn?.addEventListener('click',()=>{
        if(getScore() >= 3 && !reelButtonElements[2].classList.contains('clicked')){
            startReelRight3();
        }
        else{
            console.log("だめ")
        }
    });

    const stopBtn = document.getElementById('right_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelRight3());
})







